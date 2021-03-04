import { Hotel } from './hotel';

export interface Voyages {
    _id: string, 
	destination : string,
	villeDepart : string, 
	hotel  :	Hotel,
	dateDepart : Date,
	dateRetour : Date,
	prix : number, 
    rabais : number,
    vedette : boolean
}
