import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CompanyListA } from '../models/CompanyListA';
import { LoginResult } from '../models/Users/LoginResult';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {
  
  constructor(private loginService:LoginService , private router:Router) { }
  companyListA:CompanyListA[];
  loginResult:LoginResult;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

     
     
   if(this.loginService.Result===true&&this.loginService.type==="Company"){
    localStorage.setItem("company","1")
    }
 
  if(localStorage.getItem("company")==="1"){
    return true;
  }


  
}

  }


