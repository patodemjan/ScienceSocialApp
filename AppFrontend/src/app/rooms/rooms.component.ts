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

  showCreateRoomModal = false;
  newRoomName = '';
  newRoomDescription = '';
  selectedImageFile: File | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();

    // Mock rooms
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

    // Mock favorites
    this.favorites = [
      { _id: '2', name: 'Neuroscience', imageUrl: 'https://via.placeholder.com/60x60?text=Neuro' },
      { _id: '5', name: 'Machine Learning', imageUrl: 'https://via.placeholder.com/60x60?text=AI' },
      { _id: '1', name: 'Sport', imageUrl: 'https://via.placeholder.com/60x60?text=Sport' },
      { _id: '6', name: 'History', imageUrl: 'https://via.placeholder.com/60x60?text=History' },
    ];

    // Pokus o backend
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.rooms = data;
          this.filteredRooms = [...this.rooms];
        }
      },
      error: (err) => {
        console.warn('Backend nedostupný → zobrazujú sa mock dáta.', err);
      },
    });
  }

  searchRooms() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredRooms = term
      ? this.rooms.filter((room) => room.name.toLowerCase().includes(term))
      : [...this.rooms];
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
      this.showCreateRoomModal = true;
    }
  }

  closeModal() {
    this.showCreateRoomModal = false;
    this.newRoomName = '';
    this.newRoomDescription = '';
    this.selectedImageFile = null;
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const allowedExtensions = ['.webp', '.jpg', '.jpeg'];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert('Only .webp, .jpg, and .jpeg images are allowed!');
      return;
    }

    this.selectedImageFile = file;
  }

  createRoom() {
    if (!this.newRoomName.trim()) {
      alert('Room name is required!');
      return;
    }

    if (!this.selectedImageFile) {
      alert('Please select an image (.webp, .jpg, .jpeg)!');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newRoom: Room = {
        _id: Math.random().toString(36).substring(2),
        name: this.newRoomName,
        description: this.newRoomDescription,
        imageUrl: reader.result as string
      };

      this.rooms.push(newRoom);
      this.filteredRooms = [...this.rooms];

      this.closeModal();
    };

    reader.readAsDataURL(this.selectedImageFile);
  }
}
