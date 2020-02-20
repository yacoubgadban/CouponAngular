import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ClientList } from 'src/app/models/ClientList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  clientList:ClientList[];
  constructor(private service:AdminServicesService,private router:Router) { }

  ngOnInit() {
    this.service.GetClientList().subscribe((data)=>{this.clientList=data});
  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
public DeleteClient(id){

  this.service.DeleteClientHttp(id).subscribe((data)=>{this.clientList=data});

  window.location.reload();

}

}

