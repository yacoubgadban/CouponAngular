import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { CompanyListA } from 'src/app/models/CompanyListA';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private adminService:AdminServicesService) { }

  public companylista:CompanyListA[];
  ngOnInit() {
  
    this.adminService.GetCompanyList().subscribe(data=>{this.companylista=data});
  
  }



}
