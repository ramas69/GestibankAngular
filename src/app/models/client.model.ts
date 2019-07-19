import { User } from './user.model';
import { Conseiller } from './conseiller.model';
import  { Compte } from './compte.model';
import { Requete } from './requete.modele';

export class Client extends User{
    private identifiant: number;
    comptes: Compte[];
    private revenuMenus: number;
    private piecesJustif: string;   
    conseiller: Conseiller;
    requetes: Requete[];
    constructor(){
        super()
        
    }

}