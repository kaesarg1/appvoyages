import { Component, OnInit } from '@angular/core';
import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-mexique',
  templateUrl: './mexique.component.html',
  styleUrls: ['./mexique.component.css']
})
export class MexiqueComponent implements OnInit {

  voyages: Voyages[] = [];
  destination:any = [];

  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getVoyages();

  }


  getVoyages(): void {
    this.voyagesService.getVoyages()
      .subscribe(resultat => {
        console.log(resultat);
        let temp: any = [];
        resultat.forEach(function (val) {
         if(val.destination === 'Méxique' || val.destination === 'Mexique') {
           temp.push(val);
         }

          
        });
        console.log(temp);
        this.destination = temp;
        this.voyages = resultat
      });
  }

}