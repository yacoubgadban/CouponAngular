import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { CompanyListA } from 'src/app/models/CompanyListA';

@Component({
  selector: 'app-caddcompany',
  templateUrl: './caddcompany.component.html',
  styleUrls: ['./caddcompany.component.css']
})
export class CaddcompanyComponent implements OnInit {


  public companylista =new CompanyListA();

  
  constructor(private service:AdminServicesService) { }

  
  ngOnInit() {
  }                                                          

  CreateCompany(){
     this.service.CreateCompany(this.companylista).subscribe((companylista)=>{companylista},(err)=>{})
 
           window.location.reload();
 

 
}

}
