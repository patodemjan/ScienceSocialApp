import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';

interface Room {
  id: number;
  name: string;
  imageUrl?: string;
  description?: string;
  members?: string[];
}

interface Post {
  id: number;
  content: string;
  type: 'chat' | 'media' | 'post';
  authorUsername: string;
  createdAt: string;
}

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  posts: Post[] = [];
  loading = true;
  selectedTab: 'chat' | 'media' | 'post' = 'chat';
  newPostContent = '';
  user: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('id');
    this.fetchUser();

    if (!roomId) {
      console.warn("Missing room ID");
      this.loading = false;
      return;
    }

    this.fetchRoom(roomId);
    this.fetchPosts(roomId);
  }

  fetchUser() {
    this.user = { username: 'john', roles: ['USER'] };
  }

  fetchRoom(id: string) {
    this.loading = true;

    this.http.get<Room>(`${environment.apiUrl}/rooms/${id}`).pipe(
      catchError(err => {
        console.warn(`Backend nedostupný → používajú sa mock room dáta pre room ${id}`, err);
        // Mock room
        return of({
          id: parseInt(id),
          name: `Mock Room ${id}`,
          imageUrl: 'https://via.placeholder.com/150',
          description: 'This is a mock room used offline.'
        } as Room);
      })
    ).subscribe(data => {
      this.room = data;
      this.loading = false;
    });
  }

  fetchPosts(roomId: string) {
    this.http.get<Post[]>(`${environment.apiUrl}/posts/room/${roomId}`).pipe(
      catchError(err => {
        console.warn(`Backend nedostupný → používajú sa mock posts pre room ${roomId}`, err);
        return of([]);
      })
    ).subscribe(data => this.posts = data);
  }
  selectTab(tab: 'chat' | 'media' | 'post') {
    this.selectedTab = tab;
  }

  addPost() {
    if (!this.newPostContent.trim() || !this.room) return;

    const post: Partial<Post> = {
      content: this.newPostContent,
      type: this.selectedTab
    };

    this.http.post<Post>(
      `${environment.apiUrl}/posts/room/${this.room.id}`,
      post
    ).pipe(
      catchError(err => {
        console.warn('Backend nedostupný → pridanie postu do mock dát.', err);
        const newId = this.posts.length + 1;
        const mockPost: Post = {
          id: newId,
          content: this.newPostContent,
          type: this.selectedTab,
          authorUsername: this.user.username,
          createdAt: new Date().toISOString()
        };
        this.posts.push(mockPost);
        this.newPostContent = '';
        return of(mockPost);
      })
    ).subscribe(p => {});
  }

  deletePost(post: Post) {
    if (!this.room) return;

    this.http.delete(`${environment.apiUrl}/posts/${post.id}`).pipe(
      catchError(err => {
        console.warn('Backend nedostupný → mazanie postu z mock dát.', err);
        this.posts = this.posts.filter((p) => p.id !== post.id);
        return of(null);
      })
    ).subscribe(() => {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    });
  }

  canEdit(post: Post) {
    return (
      this.user &&
      (this.user.roles.includes('ADMIN') ||
        post.authorUsername === this.user.username)
    );
  }
}
