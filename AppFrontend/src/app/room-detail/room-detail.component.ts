import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

interface Room {
  name: string;
  imageUrl?: string;
  description?: string;
  members: string[];
}

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.fetchRoom(roomId);
    } else {
      this.loading = false;
    }
  }

  fetchRoom(id: string) {
    this.loading = true;
    this.http.get<Room>(`${environment.apiUrl}/rooms/${id}`).subscribe({
      next: (data) => {
        this.room = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching room:', err);
        this.room = null;
        this.loading = false;
      }
    });
  }
}
