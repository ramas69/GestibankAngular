import { DemandeOuverture } from './demande-ouverture.model';
import { Requete } from './requete.modele';
import  { Client } from './client.model';
import  { Transaction } from './transaction.model';

export class Conseiller {

    
    clients: Client[];
    listeDemandeClients: Requete[];
    demandeOuvertures: DemandeOuverture[];

    constructor(){
        
    }

}

