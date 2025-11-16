import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../safe.pipe';
import { MOCK_ROOMS, Room, Topic, Post } from '../services/mock-posts';
import { AuthService, User } from '../auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, SafePipe],
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  selectedTab: 'chat' | 'topic' | 'list' = 'chat';
  topics: Topic[] = [];
  displayedTopics: Topic[] = [];
  selectedTopic: Topic | null = null;

  newTopicTitle = '';
  newPostContent = '';
  newChatMessage = '';

  user: User | null = null;
  chatPosts: Post[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (!roomId) return;

    this.room = MOCK_ROOMS.find(r => r._id === roomId) || null;
    this.topics = this.room?.topics || [];

    this.topics.sort((a, b) => a.title.localeCompare(b.title));
    this.displayedTopics = [...this.topics];

    this.chatPosts = [
      ...this.room?.topics.flatMap(t => t.posts.filter(p => p.type==='chat')) || []
    ].sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    this.user = this.authService.getUser();
    this.isLoggedIn = !!this.user;

    if (this.topics.length > 0) {
      this.selectedTopic = this.topics[0];
    }
  }

  selectTab(tab: 'chat' | 'topic' | 'list') {
    this.selectedTab = tab;
    if(tab === 'topic' && !this.selectedTopic && this.topics.length > 0) {
      this.selectedTopic = this.topics[0];
    }
  }

  openTopic(topic: Topic) {
    this.selectedTopic = topic;
    this.selectedTab = 'topic';
  }

  addTopic() {
    if (!this.newTopicTitle.trim()) return;
    const newTopic: Topic = { id: Date.now().toString(), title: this.newTopicTitle, posts: [] };
    this.topics.push(newTopic);
    this.displayedTopics.push(newTopic);
    this.displayedTopics.sort((a,b) => a.title.localeCompare(b.title));
    this.newTopicTitle = '';
  }

  addComment(topic: Topic, content: string) {
    if (!content.trim() || !this.user) return;
    topic.posts.unshift({
      id: Date.now().toString(),
      content,
      type: 'post',
      authorUsername: this.user.username,
      createdAt: new Date().toISOString()
    });
  }

  isYouTube(text: string): boolean {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(text);
  }

  isImage(text: string): boolean {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(text);
  }

  isMediaLink(text: string): boolean {
    return this.isYouTube(text) || this.isImage(text);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    if (this.isYouTube(url)) {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    return url as any;
  }

  sendChatMessage() {
    if (!this.newChatMessage.trim() || !this.user) return;
    const chatPost: Post = {
      id: Date.now().toString(),
      content: this.newChatMessage,
      type: 'chat',
      authorUsername: this.user.username,
      createdAt: new Date().toISOString()
    };
    this.chatPosts.unshift(chatPost);
    this.newChatMessage = '';
  }

  goToRooms() {
    this.router.navigate(['/mainpage/rooms']);
    this.selectedTab = 'chat';
    this.selectedTopic = null;
  }

  searchTopic(searchValue: string) {
    const query = searchValue.trim().toLowerCase();
    this.displayedTopics = query ? this.topics.filter(t => t.title.toLowerCase().includes(query)) : [...this.topics];
  }

  viewAllTopics() {
    this.displayedTopics = [...this.topics];
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }

  canChat(): boolean {
    return !!this.user;
  }

  navigateTo(endpoint: string) {
    this.router.navigate([endpoint]);
  }
}
