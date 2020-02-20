import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caddcompany',
  templateUrl: './caddcompany.component.html',
  styleUrls: ['./caddcompany.component.css']
})
export class CaddcompanyComponent implements OnInit {


  public companylista =new CompanyListA();
companylista2:CompanyListA[];
  
  constructor(private service:AdminServicesService,private router:Router) { }

  
  ngOnInit() {
  }                                                          
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
  
  CreateCompany(){
    
    

   
    this.service.CreateCompany(this.companylista).subscribe((companylista)=>{companylista},(err)=>{err=err})
 
 

 
}

}
