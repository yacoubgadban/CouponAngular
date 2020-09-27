import { Component, OnInit } from '@angular/core';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  
  public companylista =new CompanyListA();
 
  companylista3:CompanyListA[];
  submitted = false;
  confirm:any;
  
  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
    
  this.companylista=this.adminService.getter();
  
  this.oldName=this.companylista.name;
   this.oldId=this.companylista.id;
   this.oldEmail=this.companylista.email;
  
  
   this
  
  
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
  oldEmail:string;
    UpdateCompanyF(){
      this.submitted = true;
 
     


      
      this.adminService.name=this.companylista.name;
      this.adminService.email=this.companylista.email;
      
    
      this.adminService.GetCompanyByEmail(this.adminService.email).subscribe((data)=>{this.companylista3=data
        console.log(this.companylista3)
        if(this.companylista.name!=this.oldName||this.companylista.id!=this.oldId||this.companylista3!=undefined&&this.companylista3['email']!=this.oldEmail ){
      alert("ERROR:this company email or name has already added !!!")
    } else{
      this.adminService.UpdateCompany(this.companylista).subscribe(companylista=>{companylista}),((err)=>{alert("failed")});
      alert("Update Success  !")
      this.router.navigate(['admin/UpdateCompany'])
    }



});

 

}
}
