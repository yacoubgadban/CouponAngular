import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Users } from 'src/app/models/Users/users';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/Users/LoginResult';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    
 
 
 

  constructor(private router:Router ,private loginServices:LoginService) { }
  
  public clientList:ClientList[];
 
  public loginResult=new LoginResult();
  
  users=new Users;

  email:string;
  
  ngOnInit() {
    
    
  
  }

  
  AdminLog(){
   
    this.loginServices.loginCommand(this.loginResult).subscribe((data)=>{this.clientList=data
  
  if(this.clientList['email']===this.loginResult.email){
      
       this.router.navigate(['main']);
       return true;
  }
else{
  alert("ops!!!   login failed");
}
  
console.log(this.clientList['email'])
console.log(this.loginResult.email)

});
 

   




    // console.log(this.email)
    // console.log(this.loginResult.email+" loginResult")

}
 
}

 





    

  



