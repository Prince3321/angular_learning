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
  postComponentMessage = ''
  currentDate = new Date()
  cost = 2000
  INR = 'INR'
  JPY = 'JPY'
  temperature = 1
  pizza = {
    toppings : ['Corn','Paneer'],
    size : 'large'
  }
  blueClass = false
  fontSize = 24

  images = [
    'https://picsum.photos/id/5/500/500',
    'https://picsum.photos/id/6/500/500',
    'https://picsum.photos/id/7/500/500'
  ]

  greet() {
    return "Good Morning"
  }

  add(num1: number, num2: number) {
    return num1 + num2
  }

  getImage() {
    this.alt = ''
    this.imgURL = 'https://picsum.photos/id/237/450/450'
  }

  changeImage(event: KeyboardEvent) {
    this.alt = ''
    this.imgURL = (event.target as HTMLInputElement).value
  }

  logImg(event: string) {
    this.postComponentMessage = event
    console.log("event: ", event);
  }

}
