import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  public companylista:CompanyListA[];
  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
    this.adminService.GetCompanyList().subscribe(data=>{this.companylista=data});
  }
 
  public deleteCompany(id:number){
   
    
    this.adminService.DeleteCompany(id).subscribe(data =>{this.companylista=data})
      
     
      window.location.reload();
    }
 
 
  }


