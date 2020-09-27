import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Users } from 'src/app/models/Users/users';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/Users/LoginResult';
import { ClientList } from 'src/app/models/ClientList';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { AdminInfo } from 'src/app/models/Users/AdminInfo';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { HeaderService } from 'src/app/services/header.service';
import { AdminGuardService } from 'src/app/services/admin-guard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  confirm:any;
  constructor(private router:Router ,private loginService:LoginService 
    ,private couponService:CouponServiceService ,private headService:HeaderService
    ,private adminGuard:AdminGuardService,private formBuilder: FormBuilder ) { }
  
    
  ngOnInit() {
  
    this.loginForm = this.formBuilder.group({
     
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', Validators.required],
    });
    

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

  get f() { return this.loginForm.controls; }

  
  public clientList:ClientList[];
 
  public companyListA:CompanyListA[];
  
  public adminInfo:AdminInfo[];
  
  public loginResult=new LoginResult();
  


  users=new Users();

  
  email:string;
  
 
  com:number;
 
  result:boolean;
  
  
  AdminLog(){

    this.submitted = true;


  if (this.loginForm.invalid) {
   
    return;

  }

    this.loginService.email=this.loginResult.email;
    this.loginService.password=this.loginResult.password;
    this.loginService.type=this.loginResult.type;
    
     
    
        if(this.adminGuard.canActivate){
      this.router.navigate(['/admin'])
    }

 
    this.loginService.loginCompany().subscribe((data)=>{this.companyListA=data
     if(this.companyListA['email']===this.loginResult.email
        &&this.companyListA['password']===this.loginResult.password){
      this.result=true;
      this.loginService.Result=this.result;
      this.couponService.couponList.companyId=this.companyListA['id'];
      localStorage.setItem("companyId",this.companyListA['id'])
      localStorage.setItem("companyName",this.companyListA['name'])
      this.router.navigate(['/company'])
    }
  
  });
    this.loginService.loginClient().subscribe((data)=>{this.clientList=data
    if(this.clientList['email']===this.loginResult.email&&this.clientList['password']===this.loginResult.password){
    this.result=true;  
    this.loginService.Result=this.result;
    localStorage.setItem("ClientId",this.clientList['id'])
    localStorage.setItem("firstName",this.clientList['firstName']) 
    localStorage.setItem("lastName",this.clientList['lastName'])
    this.router.navigate(['/main'])
    }
  
  });
 }

 onReset() {
  this.submitted = false;
  this.loginForm.reset();
}
 
}
 

 





    

  



