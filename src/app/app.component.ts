import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  say = "Hello World";

  greet() {
    return "Good Morning"
  }

  add(num1: number, num2: number) {
    return num1 + num2
  }
}
