import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Voyages } from './voyages';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/';


  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Voyages[]> {
    return this.http.get<Voyages[]>(this.voyagesUrl + 'forfaits');  
  }
  addVoyages(forfait: Voyages): Observable<Voyages> {
    return this.http.post<Voyages>(this.voyagesUrl + 'forfaits', forfait, httpOptions);
}
  /** PUT: mise à jour du héros */
  updateVoyages(voyages: Voyages): Observable<any> {
    const id = voyages._id;
    return this.http.put<Voyages>(this.voyagesUrl + 'forfaits/' + id,  httpOptions);
    }

/** DELETE: suppression du héros */
  deleteVoyages(id: string): Observable<Voyages> {
    return this.http.delete<Voyages>(this.voyagesUrl + 'forfaits/' + id, httpOptions);
    }

}

