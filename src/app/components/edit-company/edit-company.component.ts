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
  companyLista2:CompanyListA[];
  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
  this.companylista=this.adminService.getter();
  this.oldName=this.companylista.name;

  }
  // public UpdateCompanyF(id:number){
  //   this.companylista.id=localStorage.getItem("id");
        
  //  this.adminService.GetCompanyId(+this.companylista.id).subscribe(data=>{data=this.companylista;});
  //   console.log(this.companylista.id,this.companylista);
  //   }

  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
  oldId:any;
  oldName:string;
  
    UpdateCompanyF(){
     this.oldId=this.companylista.id;
 if(this.companylista.name===this.oldName&&this.companylista.id===this.oldId){
 alert( "success !!" ),this.router.navigate(['admin/UpdateCompany']) ,this.adminService.UpdateCompany(this.companylista).subscribe(companylista=>{companylista}),((err)=>{alert("failed")});
 
} else{
  alert("Error: can't change company name !!");
}

}
}