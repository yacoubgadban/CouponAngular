import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  clientList:ClientList[];
  constructor(private service:AdminServicesService) { }

  ngOnInit() {
    this.service.GetClientList().subscribe((data)=>{this.clientList=data});
  }

public DeleteClient(id){

  this.service.DeleteClientHttp(id).subscribe((data)=>{this.clientList=data});

  window.location.reload();

}

}

