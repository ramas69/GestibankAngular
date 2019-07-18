import { Compte } from './compte.model';
import  { Client } from './client.model';

export class Requete {

    private id: number;
    client: Client;
    compte: Compte;
    private message: string;
    requete: Requete[];

    constructor(){
        
    }

}