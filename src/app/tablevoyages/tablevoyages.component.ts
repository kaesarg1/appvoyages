import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

import { Voyages } from '../voyages';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-tablevoyages',
  templateUrl: './tablevoyages.component.html',
  styleUrls: ['./tablevoyages.component.css']
})
export class TablevoyagesComponent implements OnInit {
  voyages!: Voyages[];
  newVoyage!: Voyages;
  columnsToDisplay = ['id', 'destination', 'villeDepart', 'hotel', 'dateDepart', 'dateRetour', 'prix', 'rabais', 'vedette' ];
  selectedVoyage!: Voyages;

  
    constructor(private voyagesService: VoyagesService) {}
   
    ngOnInit(): void {
      // this.newVoyage= {_id: null, 
      //                   destination:'', 
      //                   villeDepart: '', 
      //                   hotel: 'Hotel', 
      //                   dateDepart:  Date, 
      //                   dateRetour: Date, 
      //                   prix: Number,
      //                   rabais: Number,
      //                   vedette: Boolean
      //                 };
      this.getVoyages();
    }
    getVoyages():void {
      this.voyagesService.getVoyages()
          .subscribe(resultat=>this.voyages=resultat);
    }
    
    onAdd(tableVoyages: MatTable<Voyages>, voyageFormAjout: NgForm) {
      if(voyageFormAjout.valid) {
        this.voyagesService.addVoyages(this.newVoyage)
            .subscribe(voyages  => { this.voyages.push(voyages); voyageFormAjout.resetForm(); tableVoyages.renderRows();});
      }
  }

  
  onSelect(voyages: Voyages): void {
    this.selectedVoyage = voyages;
  }

  onEdit(voyageFormEdition: NgForm): void {
    if (voyageFormEdition.valid) {
      this.voyagesService.updateVoyages(this.selectedVoyage)
          .subscribe(() => this.selectedVoyage);
    }
   }
   
   onDelete(voyages: Voyages): void {
    this.voyagesService.deleteVoyages(voyages._id)
        .subscribe(result => this.voyages = this.voyages.filter(h => h !== voyages));
   }
}
