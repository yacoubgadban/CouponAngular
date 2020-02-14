import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
clientList:ClientList[];
  constructor(private service:AdminServicesService) { }

  ngOnInit() {
  
    this.service.GetClientList().subscribe((data)=>{this.clientList=data});
  
  }

}
