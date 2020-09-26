import { Component, OnInit } from '@angular/core';
import { ClientList } from 'src/app/models/ClientList';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  clientList=new ClientList();
  ClientRegForm: FormGroup;
  submitted = false;
  
  constructor(private service:RegisterService ,private formBuilder: FormBuilder ,private router:Router) { }
confirm:any;
  ngOnInit() {
    this.ClientRegForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
}

// convenience getter for easy access to form fields
get f() { return this.ClientRegForm.controls; }


onReset() {
  this.submitted = false;
  this.ClientRegForm.reset();
}
  

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  
createClient(){
  this.submitted = true;

  
  if (this.ClientRegForm.invalid) {
      return;
  }

  this.service.CreateClient(this.clientList).subscribe((clientList)=>{clientList} );
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ClientRegForm.value, null, 4));

  
  this.router.navigate(['/login'])
}



}
