import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requete } from '../models/requete.modele';

@Injectable({
  providedIn: 'root'
})
export class RequeteService {

  constructor(private httpClient:HttpClient) { }

  public getRequete(){
    return this.httpClient.get<Requete[]>('http://localhost:8080/SpringWebService/requetes/get/all');
   }

  public createRequete(requete){
    return this.httpClient.put("http://localhost:8080/SpringWebService/requetes/create",requete );

  }
}
