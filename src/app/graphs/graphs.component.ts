import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Reservations } from '../reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {
  reservations!: Array<Reservations>;
  labels:  Array<string> =[] ;
  data: Array<number>=[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors =[
    {
      backgroundColor: [
        'rgb(255, 51, 51)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
        'rgb(255, 133, 51)',
        'rgba(129, 199, 111, 1)'
    ]
    }
  ];
 
  constructor(private reservationsService: ReservationsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationsService.getReservations()
        .subscribe(resultat => {
          this.reservations = resultat;
          this.getLabels();
          this.getValues();
          this.addValues();
        });
  }

  getLabels () :void{

    this.reservations.map(reservation =>{
      if(!this.labels.includes(reservation.destination)){
        this.labels.push(reservation.destination);
      }
    });

  }

  getValues () :void{
    this.data= new Array(this.labels.length).fill(0);
    this.reservations.map(reservation =>{
      if(this.labels.includes(reservation.destination))
      {
        let index= this.labels.indexOf(reservation.destination);
        this.data[index]++;
      }
    });

  }

  addValues () :void{
    for(let i=0; i<this.labels.length; i++){
      this.pieChartLabels.push(this.labels[i]);
      this.pieChartData.push(this.data[i]);

    }


  }
  

}