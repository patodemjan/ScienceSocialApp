import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  imports: [],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // presmerovanie na homepage
  }

  createProfile() {
    // Tu neskôr dopojíš backend
    alert('Profile created!'); 
  }
}
