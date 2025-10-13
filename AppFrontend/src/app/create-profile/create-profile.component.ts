import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  createProfile() {
    const newUser = { username: this.username, password: this.password };

    this.http.post('http://localhost:8080/api/users/register', newUser).subscribe({
      next: (response) => {
        console.log('User created:', response);
        alert('Profile created successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error creating profile:', err);
        alert('Failed to create profile');
      }
    });
  }
}