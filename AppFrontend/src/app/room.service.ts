import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Room {
  _id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private apiUrl = 'https://sciencesocialapp.onrender.com/api/rooms';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    // Pokus o backend, fallback na mock dáta
    return this.http.get<Room[]>(this.apiUrl);
  }

  createRoom(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getRoomById(id: string): Observable<Room> {
    // Mock example: ak backend padne
    const mockRoom: Room = {
      _id: id,
      name: 'Mock Room',
      imageUrl: 'assets/mock.webp',
      description: 'This is a mock room description'
    };
    return of(mockRoom); // vráti Observable s mock dátami
  }
}
