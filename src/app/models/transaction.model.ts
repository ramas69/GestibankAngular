import { Compte } from './compte.model';
export class Transaction {

    private id: number;
    private montant: number;
    compte: Compte;
    private libelle: string;
    private date: Date; 

    constructor(){
        
    }

}