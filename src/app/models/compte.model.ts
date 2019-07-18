import  { Client } from './client.model';
import  { Transaction } from './transaction.model';

export class Compte {

    private id: number;
    private rib: string;
    private nCompte: string;
    private solde: number;
    private decouvert: number;
    private mntantAgios: number;
    private seuilRemuneration: number;
    private montantRemuneration: number;
    client: Client;
    transactions: Transaction[];
    notifications: Notification[];
    constructor(){
        
    }

} 