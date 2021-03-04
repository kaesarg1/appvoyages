import { Component, OnInit } from '@angular/core';
import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  events: string[] = [];
  voyages: Voyages[] = [];
  vedetteTrue: any = [];



  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getVoyages();
  }


  getVoyages(): void {
    this.voyagesService.getVoyages()
      .subscribe(resultat => {
        console.log(resultat);
        resultat.forEach((val)=>{
          if(val.vedette){
            this.vedetteTrue.push(val);
          }
        });
       
        this.voyages = resultat
      });
  }
}
