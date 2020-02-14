import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientList } from '../models/ClientList';
import { LoginResult } from '../models/Users/LoginResult';
import { Users } from '../models/Users/users';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  
LoginResult:LoginResult[];
  
users:Users
  public constructor(public loginService:LoginService , public router:Router ) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  
  
  if(this.users.reso=true){
    
    return true;
   }
   
   else{
    

  return false;
   }
  
  }
}
