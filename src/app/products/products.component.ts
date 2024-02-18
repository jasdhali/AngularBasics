import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1,name : "Analog watch", price : '409', color: 'Black', available:'Available',image:'Not Available'},
    {id:2,name : "Digital watch", price : '209', color: 'Blue', available:'Not Available',image:'Not Available'},
    {id:3,name : "Google Glasses", price : '302', color: 'Green', available:'Available',image:'Not Available'},
    {id:4,name : "Music Player", price : '78', color: 'Orange', available:'Not Available',image:'Not Available'}
  ];
}
