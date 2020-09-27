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
  clientList2:ClientList[];
  oldEmail:string;
  
  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit() {
    this.clientList=this.adminService.getClient();
    this.oldEmail=this.adminService.clientList.email;

  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
  updateClient(){
    this.adminService.ClientEmail=this.clientList.email;
    this.adminService.GetClientByEmail(this.clientList.email).subscribe((data)=>{this.clientList2=data
     
      if(this.clientList2!=undefined&&this.clientList2['email']!=this.oldEmail){
        console.log(this.oldEmail);
        alert("ERROR: this email in use !")

      }
else{
    this.adminService.UpdateClientHttp(this.clientList).subscribe(clientList=>{clientList});
     
      alert("Company updated success !")
    this.router.navigate(['admin/updateClient']);
}
    
 

  
  }); 
  
}
}
