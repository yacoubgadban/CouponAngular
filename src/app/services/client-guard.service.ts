import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Users } from '../models/Users/users';
import { CompanyListA } from '../models/CompanyListA';

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService implements CanActivate {
  
  constructor(private loginService:LoginService ,private router:Router ) { }
  users=new Users();
  companyListA:CompanyListA[];
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean   {
 
 
    
 
 
    if(this.loginService.Result===true&&this.loginService.type==="Client"){
      
      localStorage.setItem("client","1")
  }

if(localStorage.getItem("client")==="1"){
  return true;
}

  
}

}
