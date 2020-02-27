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
    confirm:any;
  companyListA = new CompanyListA();
  companylista2:CompanyListA[];
companylista3:CompanyListA[];
constructor(private service:RegisterService ,private formBuilder: FormBuilder ,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required],
     
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

createCompany(){
  
   

  
  
  
  
      this.submitted = true;
 
     


  if (this.registerForm.invalid) {
   
    return;

  }
  this.service.name=this.companyListA.name;
    this.service.email=this.companyListA.email;
    
    this.service.GetCompanyByName(this.companyListA.name).subscribe((data)=>
    {this.companylista2=data
      this.service.GetCompanyByEmail(this.companyListA.email).subscribe((data)=>
      {this.companylista3=data
    
        if(this.companylista2!=undefined || this.companylista3!=undefined){
          alert("ERROR:this company email or name has already added !!!")

         

      
        }
        else{
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
          this.service.CreateCompany(this.companyListA).subscribe((companyListA)=>{companyListA} );
           this.router.navigate(['/login'])
        
        }
      });
    });
 
 
  
  
  
   
  
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

  
    
   checkEmail(){
    
   

  
   }
    
    
    }


