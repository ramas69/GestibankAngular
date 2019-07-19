import { Conseiller } from './conseiller.model';
import  { Compte } from './compte.model';
import { Requete } from './requete.modele';

export class Client {
    
    constructor(private identifiant: number,
        comptes: Compte[],
        private revenuMenus: number,
        private piecesJustif: string,   
        conseiller: Conseiller,
        requetes: Requete[]){
        
    }

}