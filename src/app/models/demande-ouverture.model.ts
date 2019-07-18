import { Conseiller } from './conseiller.model';
import { ClientPotentiel } from './client-potentiel.model';

export class DemandeOuverture {

    private id: number;    
    clientPotentiel: ClientPotentiel;
    private valide: boolean;
    conseiller: Conseiller;
   
    constructor(){
        
    }

}