import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../safe.pipe';
import { MOCK_ROOMS, Room, Topic, Post } from '../services/mock-posts';
import { AuthService, User } from '../auth.service';

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
  displayedTopics: Topic[] = []; // topics po filtrovaní
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
    private authService: AuthService
  ) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (!roomId) return;

    this.room = MOCK_ROOMS.find(r => r._id === roomId) || null;
    this.topics = this.room?.topics || [];
    this.displayedTopics = [...this.topics]; // inicialne zobraz všetky

    this.chatPosts = [
      ...this.room?.topics.flatMap(t => t.posts.filter(p => p.type==='chat')) || []
    ];

    this.user = this.authService.getUser();
    this.isLoggedIn = !!this.user;

    // Ak existujú topic-y, nastav prvý ako default pre topic tab
    if (this.topics.length > 0) {
      this.selectedTopic = this.topics[0];
    }
  }

  selectTab(tab: 'chat' | 'topic' | 'list') {
    this.selectedTab = tab;
    if(tab === 'topic' && !this.selectedTopic && this.topics.length > 0) {
      this.selectedTopic = this.topics[0]; // hneď zobraz prvý topic
    }
  }

  openTopic(topic: Topic) {
    this.selectedTopic = topic;
    this.selectedTab = 'topic'; // hneď zobraz obsah topicu
  }

  addTopic() {
    if (!this.newTopicTitle.trim()) return;
    const newTopic: Topic = { id: Date.now().toString(), title: this.newTopicTitle, posts: [] };
    this.topics.push(newTopic);
    this.displayedTopics.push(newTopic);
    this.newTopicTitle = '';
  }

  addPost(topic: Topic) {
    if (!this.newPostContent.trim() || !this.user) return;
    topic.posts.push({
      id: Date.now().toString(),
      content: this.newPostContent,
      type: 'post',
      authorUsername: this.user.username,
      createdAt: new Date().toISOString()
    });
    this.newPostContent = '';
  }

  addPostWithLink(topic: Topic, link: string) {
    if (!link.trim() || !this.user) return;
    topic.posts.push({
      id: Date.now().toString(),
      content: 'Video post',
      type: 'media',
      authorUsername: this.user.username,
      createdAt: new Date().toISOString(),
      link
    });
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
    this.chatPosts.push(chatPost);
    this.newChatMessage = '';
  }

  goToRooms() {
    this.router.navigate(['/mainpage/rooms']);
    this.selectedTab = 'chat';
    this.selectedTopic = null;
  }

  // Vyhľadávanie topicov podľa názvu
  searchTopic(searchValue: string) {
    const query = searchValue.trim().toLowerCase();
    if (!query) {
      this.displayedTopics = [...this.topics]; // zobraz všetky
    } else {
      this.displayedTopics = this.topics.filter(t => t.title.toLowerCase().includes(query));
    }
  }

  // Zobrazenie všetkých topicov
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

  navigateTo(page: string) {
    this.router.navigate([`/mainpage/${page}`]);
  }
}
