import { User } from './user.model';
import { DemandeOuverture } from './demande-ouverture.model';
import { Conseiller } from './conseiller.model';

export class Admin extends User{

    conseillers: Conseiller[];
    demandeOuvertures: DemandeOuverture[];
    constructor(){
        super()
    }

}