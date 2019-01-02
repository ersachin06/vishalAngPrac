import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c10rating',
  templateUrl: './c10rating.component.html',
  styleUrls: ['./c10rating.component.css']
})
export class C10ratingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  prodRating:string;

  @Input()
  category:any;
}
