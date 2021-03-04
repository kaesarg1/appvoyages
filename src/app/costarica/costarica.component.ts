import { Component, OnInit } from '@angular/core';
import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-costarica',
  templateUrl: './costarica.component.html',
  styleUrls: ['./costarica.component.css']
})
export class CostaricaComponent implements OnInit {
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
         if(val.destination === 'Costa Rica' || val.destination === 'Costa Rica') {
           temp.push(val);
         }

          
        });
        console.log(temp);
        this.destination = temp;
        this.voyages = resultat
      });
  }

}