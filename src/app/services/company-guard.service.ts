import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {
  
  constructor(private loginService:LoginService , private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   
   if(this.loginService.isLoggedIn===true&&this.loginService.type==="Company"){
   localStorage.setItem("company","1")
    }
  
  if(localStorage.getItem("company")==="1"){
    return true;
  }
  return false;

  
  }

  
}
