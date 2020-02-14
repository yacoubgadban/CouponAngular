import { Component, OnInit } from '@angular/core';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  public companylista =new CompanyListA();

  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
  this.companylista=this.adminService.getter();
  console.log(this.companylista);

  }
  // public UpdateCompanyF(id:number){
  //   this.companylista.id=localStorage.getItem("id");
        
  //  this.adminService.GetCompanyId(+this.companylista.id).subscribe(data=>{data=this.companylista;});
  //   console.log(this.companylista.id,this.companylista);
  //   }

   
    UpdateCompanyF(){
     if(this.adminService.UpdateCompany(this.companylista).subscribe(companylista=>{companylista})){
      alert("Company updated success !")
     this.router.navigate(['admin/UpdateCompany']);
     }
     console.log(this.companylista)

    }
}
