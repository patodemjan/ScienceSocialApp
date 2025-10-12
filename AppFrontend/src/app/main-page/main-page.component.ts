import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule], // ✅ sem to pridaj
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ak chceš, aby reagoval aj na reload
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log('MainPageComponent reloaded');
      });
  }

  navigateTo(path: string) {
    switch (path) {
      case 'help':
        this.router.navigate(['/help']);
        break;
      case 'faq':
        this.router.navigate(['/faq']);
        break;
      case 'cookies':
        this.router.navigate(['/cookies']);
        break;
      case 'mainpage':
        this.router.navigate(['/mainpage']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
