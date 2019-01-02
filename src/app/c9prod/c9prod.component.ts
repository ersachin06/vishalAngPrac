import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c9prod',
  templateUrl: './c9prod.component.html',
  styleUrls: ['./c9prod.component.css']
})
export class C9prodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products:any[]=[
    {pid:1,catid:1,name:'dell',img:'l1.jpg',desc:'description',price:15000,qty:100,rating:5},
    {pid:2,catid:1,name:'sony vaio',img:'l2.jpg',desc:'description',price:25000,qty:150,rating:4},
    {pid:3,catid:2,name:'apple',img:'m1.jpg',desc:'description',price:35000,qty:200,rating:3},
    {pid:4,catid:2,name:'samsung',img:'m2.jpg',desc:'description',price:45000,qty:250,rating:2},
    {pid:5,catid:3,name:'nike',img:'s1.jpg',desc:'description',price:45000,qty:300,rating:1},
    {pid:6,catid:3,name:'woodland',img:'s2.jpg',desc:'description',price:65000,qty:400,rating:5},
    {pid:7,catid:4,name:'wrangler',img:'c1.jpg',desc:'description',price:75000,qty:450,rating:4},
    {pid:8,catid:4,name:'spykar',img:'c2.jpg',desc:'description',price:85000,qty:500,rating:3}
  ];
  cat:any={catid:1, name:"laptop",img:"l1.jpg",desc:"description"};
}
