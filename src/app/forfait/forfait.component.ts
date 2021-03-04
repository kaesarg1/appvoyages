import { Component, OnInit, Input } from '@angular/core';
import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';
@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent  implements OnInit{

  @Input() forfaitData : any;

  constructor() {}

  ngOnInit(): void {
  }

}