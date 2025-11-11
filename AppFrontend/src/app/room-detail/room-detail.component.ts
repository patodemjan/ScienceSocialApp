import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { CommonModule } from '@angular/common'; // <-- import CommonModule

interface Room {
  _id: string;
  name: string;
  description?: string;
  members?: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
  imports: [CommonModule]       // <-- pridaj sem CommonModule pre *ngIf, *ngFor
})
export class RoomDetailComponent implements OnInit {
  roomId!: string;
  room?: Room;
  loading = true;

  constructor(private route: ActivatedRoute, private roomService: RoomService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      console.error('Room id not provided in route.');
      this.loading = false;
      return;
    }
    this.roomId = id;

    // MOCK DATA pre testovanie
    this.room = {
      _id: this.roomId,
      name: 'Mock Room',
      description: 'Toto je testovacia miestnosť',
      members: ['Alice', 'Bob', 'Charlie'],
      imageUrl: 'https://via.placeholder.com/150'
    };
    this.loading = false;
  }
}
