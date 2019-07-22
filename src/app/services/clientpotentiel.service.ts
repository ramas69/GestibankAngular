import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientPotentiel } from '../models/client-potentiel.model';

@Injectable({
  providedIn: 'root'
})
export class ClientpotentielService {
  constructor(private httpClient:HttpClient) { }

  public getClientsPotentiels(){
    return this.httpClient.get<ClientPotentiel[]>('http://localhost:8080/SpringWebService/clientsPotentiels/get/all');
   }
   public createClientsPotentiel(clientpotentiel) {
    return this.httpClient.post<ClientPotentiel>("http://localhost:8080/SpringWebService/clientsPotentiels/create", clientpotentiel);
  }


  public updateclientpotentiel(clientpotentiel){
    return this.httpClient.put("http://localhost:8080/SpringWebService/clientsPotentiels/update",clientpotentiel );
  }
}
