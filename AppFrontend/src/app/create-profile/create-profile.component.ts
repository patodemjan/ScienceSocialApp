import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CreateProfileComponent {
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  createProfile() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { username: this.username, password: this.password };

    this.http.post(`${environment.apiUrl}/register`, newUser).subscribe({
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
