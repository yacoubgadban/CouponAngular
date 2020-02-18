import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Users } from 'src/app/models/Users/users';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/Users/LoginResult';
import { ClientList } from 'src/app/models/ClientList';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { AdminInfo } from 'src/app/models/Users/AdminInfo';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
   
    if(localStorage.getItem("admin")==="1"){
      this.router.navigate(['admin'])
    }
    
    if(localStorage.getItem("company")==="1"){
      this.router.navigate(['company'])
    }

    if(localStorage.getItem("client")==="1"){
      this.router.navigate(['main'])
    }

  }



  constructor(private router:Router ,private loginServices:LoginService ,private couponService:CouponServiceService) { }
  
  public clientList:ClientList[];
 
  public companyListA:CompanyListA[];
  
  public adminInfo:AdminInfo[];
  public loginResult=new LoginResult();
  


  users=new Users();

  
  email:string;
  
 
  com:number;

  
  AdminLog(){
   
   
  this.loginServices.loginCompany(this.loginResult).subscribe((data)=>{this.companyListA=data

    this.loginServices.type=this.loginResult.type;
if (this.companyListA['email']===this.loginResult.email&&this.companyListA['password']===this.loginResult.password){

  this.couponService.couponList.companyId=this.companyListA['id'];
 localStorage.setItem("companyId",this.companyListA['id'])
this.users.isLoggedIn=true;
this.loginServices.isLoggedIn=this.users.isLoggedIn
this.router.navigate(['company'])
console.log(this.couponService.couponList.companyId)
}

});


this.loginServices.loginAdmin(this.loginResult).subscribe((data)=>{this.adminInfo=data
  
  
    if  (this.adminInfo['email']===this.loginResult.email&&this.adminInfo['password']===this.loginResult.password){
  this.loginServices.type=this.loginResult.type;
  this.users.isLoggedIn=true;
  this.loginServices.isLoggedIn=this.users.isLoggedIn
  this.router.navigate(['admin'])
  }
  

});

  this.loginServices.loginClient(this.loginResult).subscribe((data)=>{this.clientList=data
    
    localStorage.setItem("firstName",this.clientList['firstName']);
    localStorage.setItem("lastName",this.clientList['lastName']);
  
  
  
  
    this.loginServices.type=this.loginResult.type;

  if(this.clientList['email']===this.loginResult.email&&this.clientList['password']===this.loginResult.password){
 this.users.isLoggedIn=true;
 this.loginServices.isLoggedIn=this.users.isLoggedIn
 this.router.navigate(['main'])
 
console.log(this.users.isLoggedIn)
console.log(this.clientList['firstName'])
}
 
});

console.log(this.couponService.couponList.companyId)

}


   




    

}
 

 





    

  



