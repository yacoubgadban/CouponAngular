import { Component, OnInit } from '@angular/core';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
 

   companylista:CompanyListA[];
   

  constructor(private adminService:AdminServicesService ,private router:Router) { }


  ngOnInit() {
    this.adminService.GetCompanyList().subscribe(data=>{this.companylista=data});
  }
 
  
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }

    

    public Update3(companylista){
this.adminService.setter(companylista);
this.router.navigate(['admin/UpdateCompany/EditCompany']);  
}
        
 NewCompany(){
   let companylista=new CompanyListA();
   this.adminService.setter(companylista);
this.router.navigate(['admin/UpdateCompany/EditCompany']);
 }


}
