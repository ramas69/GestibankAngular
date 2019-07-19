import { Client } from './../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  getClients(){
    return this.httpClient.get<Client[]>('http://localhost:8080/SpringWebService/clients/get/all');
      }

}
