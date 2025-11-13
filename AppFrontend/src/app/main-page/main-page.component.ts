import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ pridaj toto
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, CommonModule], // ✅ pridaj CommonModule sem
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkLoginStatus();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLoginStatus(); // zmení stav aj po reload
      });
  }

  checkLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  navigateTo(path: string) {
    switch (path) {
      case 'help': this.router.navigate(['/help']); break;
      case 'faq': this.router.navigate(['/faq']); break;
      case 'cookies': this.router.navigate(['/cookies']); break;
      case 'mainpage': this.router.navigate(['/mainpage']); break;
      default: this.router.navigate(['/']); break;
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/mainpage/login']);
  }
}
