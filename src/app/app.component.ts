import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  say = "Hello World";
  alt = '';
  imgURL = 'https://picsum.photos/id/5/500/500'

  greet() {
    return "Good Morning"
  }

  add(num1: number, num2: number) {
    return num1 + num2
  }

  getImage() {
    this.alt = ''
    this.imgURL = 'https://picsum.photos/id/237/200/300'
  }

  changeImage(event: KeyboardEvent) {
    this.alt = ''
    this.imgURL = (event.target as HTMLInputElement).value
  }
}
