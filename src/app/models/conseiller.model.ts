import { User } from './user.model';
import { DemandeOuverture } from './demande-ouverture.model';
import { Requete } from './requete.modele';
import  { Client } from './client.model';
import  { Transaction } from './transaction.model';

export class Conseiller extends User{

    
    clients: Client[];
    listeDemandeClients: Requete[];
    demandeOuvertures: DemandeOuverture[];

    constructor( public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public adresse: string,
        public telephone: string,
        public pseudo: string,
        public mdp: string){
        super(id,nom,prenom,email,adresse,telephone,pseudo,mdp);
    }

}

