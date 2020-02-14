import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/Users/users';
import { LoginResult } from '../models/Users/LoginResult';
import { ClientList } from '../models/ClientList';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loginResult:LoginResult['email'];
  
public email:string;
public password:string;

  
 constructor(private httpClient:HttpClient) { }

public clientList=new ClientList();





public loginCommand(loginResult:LoginResult):Observable<ClientList[]>{
  
 return this.httpClient.get<ClientList[]>("http://localhost:8080//clients/get"+"/"+loginResult['email']);
}





}
