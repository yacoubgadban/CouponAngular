import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Router } from '@angular/router';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public clientList =new ClientList();

  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
    this.clientList=this.adminService.getClient();
    console.log(this.clientList);
  }

  updateClient(){
    if(this.adminService.UpdateClientHttp(this.clientList).subscribe(clientList=>{clientList})){
     alert("Company updated success !")
    this.router.navigate(['admin/updateClient']);
    }
    console.log(this.clientList)

   }

}
