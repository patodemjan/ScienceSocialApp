import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // môže byť prázdny
  standalone: true,
  imports: [RouterModule, HttpClientModule]
})
export class AppComponent {
  
}
