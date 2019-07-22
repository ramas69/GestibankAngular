import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl= "http://localhost:8080/SpringWebService/users/login";
  user:any;

  constructor(private httpClient:HttpClient) { }
  
  login(user) {
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpClient.post(this.apiUrl, user, {headers: httpHedears});
  }


}
