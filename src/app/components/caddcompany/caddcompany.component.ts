import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-caddcompany',
  templateUrl: './caddcompany.component.html',
  styleUrls: ['./caddcompany.component.css']
})
export class CaddcompanyComponent implements OnInit {


  public companylista =new CompanyListA();
companylista2:CompanyListA[];
companylista3:CompanyListA[];
  constructor(private service:AdminServicesService,private router:Router,private formBuilder: FormBuilder) { }

  
  ngOnInit() {



    
  }                                                          
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
  
  CreateCompany(){
    
    this.service.name=this.companylista.name;
    this.service.email=this.companylista.email;
   
    this.service.GetCompanyByName(this.companylista.name).subscribe((data)=>{this.companylista2=data
    this.service.GetCompanyByEmail(this.companylista.email).subscribe((data)=>{this.companylista3=data
   
    if(this.companylista2!=undefined || this.companylista3!=undefined){
      alert("ERROR:this company email or name has already added !!!")
    }else{
      this.service.CreateCompany(this.companylista).subscribe((companylista)=>{companylista},(err)=>{err=err})
      alert("Success:company has been added !")
      window.location.reload()
    }
    
      });
   });
    
 
 

 
}

}
