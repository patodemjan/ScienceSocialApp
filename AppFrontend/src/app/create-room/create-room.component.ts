import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  roomName = '';
  selectedFile: File | null = null;

  constructor(private roomService: RoomService, private router: Router) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length ? input.files[0] : null;
  }

  public navigateToHome() {
  this.router.navigate(['/']);
  }

  createRoom() {
    if (!this.roomName || !this.selectedFile) return;

    const formData = new FormData();
    formData.append('name', this.roomName);
    formData.append('image', this.selectedFile);

    this.roomService.createRoom(formData).subscribe(() => {
      this.router.navigate(['/rooms']);
    });
  }
}
