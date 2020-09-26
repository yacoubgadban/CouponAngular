import { Component, OnInit } from '@angular/core';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { ClientList } from 'src/app/models/ClientList';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
public clientList=new ClientList();
       clientList2:ClientList[];
       addClientForm: FormGroup;
       submitted = false;
       confirm:any;
  constructor(private ClientService:AdminServicesService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
  
    this.addClientForm = this.formBuilder.group({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
     
     
 
     
  });
  
  }
  get f() { return this.addClientForm.controls; }
  public CreateClient(){
    this.submitted = true;
 
     


    if (this.addClientForm.invalid) {
     
      return;
  
    }
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
