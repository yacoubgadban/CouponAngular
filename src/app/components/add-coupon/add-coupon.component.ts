import { Component, OnInit } from '@angular/core';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'util';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  addCouponForm: FormGroup;
  submitted = false;
  confirm:any;
  public couponList=new CouponList();
  i:any;
  public couponList2:CouponList[];
  public currentDate:Date;
  constructor(private service:CouponServiceService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
 this.currentDate=new Date();
 
 this.addCouponForm = this.formBuilder.group({
  
  categoryId: ['',Validators.required],
  title: ['', [Validators.required, Validators.maxLength(20)]],
  description: ['', [Validators.required, Validators.maxLength(100)]],
  start_date: ['', Validators.required],
  end_date: ['', Validators.required],
  amount: ['', Validators.required],
  price: ['', Validators.required],
 

 
});

  }
  get f() { return this.addCouponForm.controls; }

  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }

public CreateCoupon(){
  this.submitted = true;
 

  // if (this.addCouponForm.invalid) {
   
  //   return;

  // }

  this.service.couponList.companyId=this.couponList.companyId;
  this.service.couponList.title=this.couponList.title;  
  this.service.getCouponsByTitle().subscribe((data)=>{this.couponList2=data
    
    
    
    
    
  
  
  this.service.CreateCoupon(this.couponList).subscribe((couponList=>{couponList}))
  ,((err)=>{alert(err)});
  alert(HttpResponse)

});
  // window.location.reload();
}


}
