import { Conseiller } from './../models/conseiller.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  // methode de l'admin pour ajouter un conseiller
  addConseiller( conseiller){
    return this.httpClient.post<Conseiller>("http://localhost:8080/SpringWebService/conseiller/create",conseiller);
  }
  getConseiller()
  {
    console.log("test call");
    return this.httpClient.get<Conseiller[]>('http://localhost:8080/SpringWebService/conseiller/get/all');
  }

  findConseillerById(id : number)
  {
    return this.httpClient.get<Conseiller>('http://localhost:8080/SpringWebService/conseiller/get'+ "/"+id);
  }
  public updateConseiller(conseiller) {
    return this.httpClient.put<Conseiller>("http://localhost:8080/SpringWebService/conseiller/update", conseiller);
  }

}
