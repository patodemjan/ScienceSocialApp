import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CreateProfileComponent {
  username = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = false;

  constructor(private http: HttpClient, private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  createProfile() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    const newUser = { username: this.username, password: this.password };

    this.http.post(`${environment.apiUrl}/users/register`, newUser).subscribe({
      next: (response) => {
        console.log('User created:', response);
        this.successMessage = true;
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        console.error('Error creating profile:', err);
        this.errorMessage = 'Failed to create profile';
        this.successMessage = false;
      }
    });
  }
}
