import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientList } from '../models/ClientList';
import { Observable } from 'rxjs';
import { CompanyListA } from '../models/CompanyListA';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
clintLIst:ClientList[];
companyListA:CompanyListA[];
  constructor(private httpClient:HttpClient) { }

  public CreateClient(clientList:ClientList):Observable<ClientList[]>{
    return this.httpClient.post<ClientList[]>("http://localhost:8080/clients/add",clientList);
    
  }

  public CreateCompany(companyListA:CompanyListA):Observable<CompanyListA[]>{
    return this.httpClient.post<CompanyListA[]>("http://localhost:8080/companylist/add",companyListA);
  
    }

}
