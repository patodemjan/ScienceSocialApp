import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Topic {
  id: string;
  title: string;
  posts: Post[];
}

export interface Post {
  id: string;
  content: string;
  authorUsername: string;
  createdAt: string;
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class RoomDetailService {
  private apiUrl = 'https://sciencesocialapp.onrender.com/api';

  constructor(private http: HttpClient) {}

  getPostsByRoom(roomId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/room/${roomId}`);
  }

  addPost(roomId: string, post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts/room/${roomId}`, post);
  }
}
