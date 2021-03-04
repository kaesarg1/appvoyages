  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservations } from './reservation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationsUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<Reservations[]>(this.reservationsUrl);  
  }
}