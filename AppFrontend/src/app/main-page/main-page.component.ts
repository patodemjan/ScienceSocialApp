import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router) { }

  navigateTo(path: string) {
    if(path === 'help') {
      this.router.navigate(['/help']);
    } else if(path === 'faq') {
      this.router.navigate(['/faq']);
    } else if(path === 'Cookies settings') {
      this.router.navigate(['/cookies']);
    }
  }
}
