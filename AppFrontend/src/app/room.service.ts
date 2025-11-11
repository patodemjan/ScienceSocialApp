import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private apiUrl = 'https://sciencesocialapp.onrender.com/api/rooms';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRoom(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getRoomById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
