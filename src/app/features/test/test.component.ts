import { Component, OnInit } from '@angular/core';
import { TestService } from '../../core/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
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