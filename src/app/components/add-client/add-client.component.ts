import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ClientList } from 'src/app/models/ClientList';
import { CouponList } from 'src/app/models/CouponList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
public clientList=new ClientList();
  constructor(private ClientService:AdminServicesService,private router:Router) { }

  ngOnInit() {
  }

  public CreateClient(){
    this.ClientService.CreateClientHttp(this.clientList).subscribe((clientList)=>{clientList},(err)=>{});
    window.location.reload();
  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
}
