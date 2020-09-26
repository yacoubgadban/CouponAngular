import { Component, OnInit } from '@angular/core';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';



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
  currentDate:Date ;
  
  constructor(private service:CouponServiceService,private router:Router,private formBuilder: FormBuilder ) { }

  ngOnInit() {
 
  this.currentDate =new Date; 
    

 
 this.addCouponForm = this.formBuilder.group({
  
  categoryId: ['',Validators.required],
  title: ['', [Validators.required, Validators.maxLength(20)]],
  description: ['', [Validators.required, Validators.maxLength(100)]],
  start_date: ['', Validators.required],
  end_date: ['', Validators.required],
  amount: ['', Validators.required],
  price: ['', Validators.required],
 
});
// setTimeout(() => {
//   alert("Attention : \n"+
//   " 1- you cant add coupons with same 'TiTLE' \n"
//   +"2- star date can't be before current date\n"+
//   "3- end date can't be before start date")
// },500);

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
 

  if (this.addCouponForm.invalid) {
   
    return;

  }

  this.service.couponList.companyId=this.couponList.companyId;

  
  
  this.service.CreateCoupon(this.couponList).subscribe((couponList=>{couponList }));
  
   }


}
