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
       clientList2:ClientList[];
  constructor(private ClientService:AdminServicesService,private router:Router) { }

  ngOnInit() {
  }

  public CreateClient(){
   this.ClientService.ClientEmail=this.clientList.email;
   this.ClientService.GetClientByEmail(this.clientList.email).subscribe((data)=>{this.clientList2=data
console.log(this.clientList2)
    if(this.clientList2!=undefined){

      alert("ERROR: this email in use !!")
    }else{
    
      
      this.ClientService.CreateClientHttp(this.clientList).subscribe((clientList)=>{clientList},(err)=>{});
      alert("Success : client has been added")
      window.location.reload();
   

    }

  }); 

}
  
  
  
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
}
