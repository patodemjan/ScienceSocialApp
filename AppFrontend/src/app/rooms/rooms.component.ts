import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RoomService, Room } from '../room.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  imports: [CommonModule, FormsModule],
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  favorites: Room[] = [];
  isLoggedIn = false;
  searchTerm: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    // 1️⃣ Mock rooms
    this.rooms = [
      { _id: '1', name: 'Sport', imageUrl: 'assets/sports.webp' },
      { _id: '2', name: 'Anatomy', imageUrl: 'assets/anatomy.webp' },
      { _id: '3', name: 'Ecology', imageUrl: 'assets/ecology.webp' },
      { _id: '4', name: 'Physics', imageUrl: 'assets/physics.webp' },
      { _id: '5', name: 'Computer science', imageUrl: 'assets/computerscience.webp' },
      { _id: '6', name: 'History', imageUrl: 'assets/history.webp' },
      { _id: '7', name: 'Astronomy', imageUrl: 'assets/astronomy.webp' },
      { _id: '8', name: 'Chemistry', imageUrl: 'assets/chemistry.webp' },
    ];
    this.filteredRooms = [...this.rooms];

    // 2️⃣ Mock favorites
    this.favorites = [
      { _id: '2', name: 'Neuroscience', imageUrl: 'https://via.placeholder.com/60x60?text=Neuro' },
      { _id: '5', name: 'Machine Learning', imageUrl: 'https://via.placeholder.com/60x60?text=AI' },
      { _id: '1', name: 'Sport', imageUrl: 'https://via.placeholder.com/60x60?text=AI' },
      { _id: '6', name: 'History', imageUrl: 'https://via.placeholder.com/60x60?text=AI' },
    ];

    // 3️⃣ Pokus o načítanie reálnych dát
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.rooms = data;
          this.filteredRooms = [...this.rooms];
        }
      },
      error: (err) => {
        console.warn('Nepodarilo sa načítať dáta z backendu, zobrazujú sa mock dáta.', err);
      },
    });
  }

  searchRooms() {
    const term = this.searchTerm.toLowerCase().trim();
    if (term) {
      this.filteredRooms = this.rooms.filter((room) =>
        room.name.toLowerCase().includes(term)
      );
    } else {
      this.filteredRooms = [...this.rooms];
    }
  }

  viewAllRooms() {
    this.searchTerm = '';
    this.filteredRooms = [...this.rooms];
  }

  openRoom(id: string) {
    this.router.navigate(['/rooms', id]);
  }

  goToCreateRoom() {
    if (this.isLoggedIn) {
      this.router.navigate(['/create-room']);
    }
  }
}
