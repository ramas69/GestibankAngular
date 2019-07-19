import { Compte } from './compte.model';
import  { Client } from './client.model';

export class Requete {

    
    constructor(    public id: number,
        public client: Client,
        public compte: Compte,
        public message: string,){

    //public typeRequete: TypeRequete

        
    }

}