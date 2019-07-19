import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {



  constructor(private httpClient:HttpClient) { }

  getComptes(){
    return this.httpClient.get<Compte[]>('http://localhost:8080/SpringWebService/comptes/get/all');
  }
  
}
