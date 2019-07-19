import { Client } from './../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  public getClients(){
    return this.httpClient.get<Client[]>('http://localhost:8080/SpringWebService/clients/get/all');
      }

  public getClientById(){
        return this.httpClient.get<Client[]>('http://localhost:8080/SpringWebService/client/get/{id}');
      }


  public createClient(client) {
        return this.httpClient.post<Client>("http://localhost:8080/SpringWebService/clients/create", client);
      }
 
      public updateClient(client) {
        return this.httpClient.post<Client>("http://localhost:8080/SpringWebService/clients/update", client);
      }

    

}
