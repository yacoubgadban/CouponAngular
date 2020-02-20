import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Router } from '@angular/router';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
clientList:ClientList[];
  constructor(private service:AdminServicesService,private router:Router) { }

  ngOnInit() {
  return this.service.GetClientList().subscribe((data)=>{this.clientList=data});
  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
public goToEditClient(clientList){

  this.service.setClient(clientList);
  this.router.navigate(['admin/updateClient/editClient']);


}

}
