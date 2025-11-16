import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../auth.service';

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

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  login() {
    this.errorMessage = '';
    this.http.post<any>(`${environment.apiUrl}/users/login`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        if (res && res.token) {
          this.authService.login(res.token);  // uloží token
          this.successMessage = true;
          setTimeout(() => this.router.navigate(['/mainpage/rooms']), 1500);
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
}
