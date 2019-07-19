import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientPotentiel } from '../models/client-potentiel.model';

@Injectable({
  providedIn: 'root'
})
export class ClientpotentielService {
  constructor(private httpClient:HttpClient) { }

  getClients(){
    return this.httpClient.get<ClientPotentiel[]>('http://localhost:8080/SpringWebService/clientsPotentiels/get/all');
      }

}
