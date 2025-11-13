import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  _id: string;
  name: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private apiUrl = 'https://sciencesocialapp.onrender.com/api/rooms';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  createRoom(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getRoomById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }
}
