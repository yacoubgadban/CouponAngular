import { Component, OnInit } from '@angular/core';
import { CompanyListA } from 'src/app/models/CompanyListA';
import { RegisterService } from 'src/app/services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  companyListA = new CompanyListA();
 
constructor(private service:RegisterService ,private formBuilder: FormBuilder ,private router:Router) { }
confirm:any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

 
  if (this.registerForm.invalid) {
      return;
  }

  
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  
}


onReset() {
  this.submitted = false;
  this.registerForm.reset();
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

  createCompany(){
   
    this.service.CreateCompany(this.companyListA).subscribe((companyListA)=>{companyListA} );
    
   
    
    
    }
  }

