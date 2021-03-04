import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  todayString : string = new Date().toDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
