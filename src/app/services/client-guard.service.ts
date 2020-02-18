import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Users } from '../models/Users/users';

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService implements CanActivate {
  
  constructor(private loginService:LoginService ,private router:Router ) { }
  users=new Users();
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean   {
    
  if(this.loginService.isLoggedIn===true && this.loginService.type==="Client"){
    localStorage.setItem("client","1")
  }

if(localStorage.getItem("client")==="1"){
  return true;
}
 
  
  return false;
  
  }

}
