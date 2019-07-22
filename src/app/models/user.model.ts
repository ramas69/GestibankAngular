import { NOMEM } from 'dns';
import { PassThrough } from 'stream';

export class User {


    constructor(    public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public adresse: string,
        public telephone: string,
        public pseudo: string,
        public mdp: string){

    }

}
