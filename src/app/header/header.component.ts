import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everythiong..';
  source: string = '/assets/shopping.jpg';
  getSlogan() { return 'This is a new slogan using method....'; }
}
