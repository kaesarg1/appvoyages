// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-miniforfait',
//   templateUrl: './miniforfait.component.html',
//   styleUrls: ['./miniforfait.component.css']
// })
// export class MiniforfaitComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';


@Component({
  selector: 'app-miniforfait',
  templateUrl: './miniforfait.component.html',
  styleUrls: ['./miniforfait.component.css']
})
export class MiniforfaitComponent implements OnInit {
  @Input() miniforfaitData : any;

  constructor() {}

  ngOnInit(): void {
  }

}

