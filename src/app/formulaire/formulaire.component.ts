import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  dateDepart = new FormControl();
  caracteristiques = new FormControl();
  etoiles = new FormControl();
  ngOnInit() {
  }

}
