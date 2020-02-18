import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/Users/users';
import { LoginResult } from '../models/Users/LoginResult';
import { ClientList } from '../models/ClientList';
import { CompanyListA } from '../models/CompanyListA';
import { AdminInfo } from '../models/Users/AdminInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public loginResult:LoginResult['email'];


  
 constructor(private httpClient:HttpClient) { }

public clientList=new ClientList();
public companyListA=new CompanyListA();
public adminInfo=new AdminInfo();
isLoggedIn:boolean;

type:string;


public loginClient(loginResult:LoginResult):Observable<ClientList[]>{
  
 return this.httpClient.get<ClientList[]>("http://localhost:8080//clients/get"+"/"+loginResult['email']);

}

public loginCompany(loginResult:LoginResult):Observable<CompanyListA[]>{

return this.httpClient.get<CompanyListA[]>("http://localhost:8080//companylist/get"+"/"+loginResult['email']);

}

public loginAdmin(loginResult:LoginResult):Observable<CompanyListA[]>{

  return this.httpClient.get<CompanyListA[]>("/assets/Json/adminServer.json");


}

}