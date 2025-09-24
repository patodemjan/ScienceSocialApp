import { Component, OnInit } from '@angular/core';
import { TestService } from '../../core/services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'], // môže byť prázdny
  standalone: true,
  imports: [CommonModule]
})
export class TestComponent implements OnInit {
  message = '';

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getHello().subscribe(data => {
      this.message = data.message;
    });
  }
}
