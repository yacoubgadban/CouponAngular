import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {CompanyListA} from '../models/CompanyListA';
import { Observable, observable } from 'rxjs';
import { ClientList } from '../models/ClientList';


@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
 public baseUrl:string=("http://localhost:8080/companylist");
 
  constructor(private httpClient:HttpClient) { }
  companylista:CompanyListA;
  clientList:ClientList;
  name:string;
  email:string;
  ClientEmail:string;
  public GetCompanyList():Observable<CompanyListA[]>{

  return this.httpClient.get<CompanyListA[]>("http://localhost:8080/companylist/getall");

  }
   
public GetCompanyByEmail(email){
  return this.httpClient.get<CompanyListA[]>("http://localhost:8080/companylist/byemail" +"/"+this.email);
}
public GetCompanyByName(name){
  return this.httpClient.get<CompanyListA[]>("http://localhost:8080/companylist/byname" +"/"+this.name);
}

  public GetClientList():Observable<ClientList[]>{
return this.httpClient.get<ClientList[]>("http://localhost:8080/clients/getall");
  }

  public GetClientByEmail(clientEmail):Observable<ClientList[]>{
    return this.httpClient.get<ClientList[]>("http://localhost:8080/clients/byemail"+"/"+this.ClientEmail);
      }
  

  public CreateCompany(companylista:CompanyListA):Observable<CompanyListA[]>{
  return this.httpClient.post<CompanyListA[]>("http://localhost:8080/companylist/add",companylista);

  }


  public CreateClientHttp(clientList:ClientList):Observable<ClientList[]>{
  return this.httpClient.post<ClientList[]>("http://localhost:8080/clients/add",clientList);
  }


  public DeleteCompany(id):Observable<CompanyListA[]>{
    return this.httpClient.delete<CompanyListA[]>("http://localhost:8080/companylist/delete"+"/"+id);
 
  }
 
  public DeleteClientHttp(id):Observable<ClientList[]>{
    return this.httpClient.delete<ClientList[]>("http://localhost:8080/clients/delete"+"/"+id);
  }
  
  public GetCompanyId(id):Observable<CompanyListA>{

    return this.httpClient.get<CompanyListA>("http://localhost:8080/companylist/update"+"/"+id);
  
    }
  
    public UpdateCompany(companylista:CompanyListA):Observable<CompanyListA[]>{
      return this.httpClient.put<CompanyListA[]>("http://localhost:8080/companylist/update"+"/"+companylista.id,companylista,{withCredentials:false});

      
}

public UpdateClientHttp(clientList:ClientList):Observable<ClientList[]>{
return this.httpClient.put<ClientList[]>("http://localhost:8080/clients/update"+"/"+clientList.id,clientList,{withCredentials:false});
}

public setter(companylista:CompanyListA){
  this.companylista=companylista;
  }

  public getter(){
   return this.companylista;
  }


  public setClient(clientList:ClientList){
    this.clientList=clientList;
    }
  
    public getClient(){
     return this.clientList;
    }
  
 
}






