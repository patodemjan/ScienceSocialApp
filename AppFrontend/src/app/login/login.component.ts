import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = false;
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.errorMessage = '';
    this.http.post<any>(`${environment.apiUrl}/users/login`, {
  username: this.username,
  password: this.password
    }).subscribe({
      next: (user) => {
        if (user) {
          this.successMessage = true;
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(user));
          setTimeout(() => {
            this.successMessage = false;
            this.router.navigate(['/mainpage/rooms']);
          }, 1500);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = 'Server error. Please try again later.';
      }
    });
  }

  canCreateRoom(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('user');
  }
}
