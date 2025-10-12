import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  static apiUrl: any;

  constructor(private router: Router) { }

  navigateTo(path: string) {
    if(path === 'visit') {
      this.router.navigate(['/visit-us']);
    } else if(path === 'create-profile') {
      this.router.navigate(['/create-profile']);
    }
  }
}
