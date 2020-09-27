import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {

  public couponList=new CouponList();
  constructor(private couponService:CouponServiceService,private router:Router,private formBuilder: FormBuilder) { }
  editCouponForm: FormGroup;
  submitted = false;
  confirm:any;
  currentDate:Date ;

  ngOnInit() {
    this.couponList=this.couponService.getCoupon();
  console.log(this.couponList);
  
  this.currentDate =new Date; 
    

 
 this.editCouponForm = this.formBuilder.group({
  
  categoryId: ['',Validators.required],
  title: ['', [Validators.required, Validators.maxLength(20)]],
  description: ['', [Validators.required, Validators.maxLength(100)]],
  start_date: ['', Validators.required],
  end_date: ['', Validators.required],
  amount: ['', Validators.required],
  price: ['', Validators.required],
 

 
});
setTimeout(() => {
  alert("Attention : \n"+
  " 1- you cant add coupons with same 'TiTLE' \n"
  +"2- star date can't be before current date\n"+
  "3- end date can't be before start date")
},500);



}
  
get f() { return this.editCouponForm.controls; }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
  UpdateCoupon(){
    this.submitted = true;
    if (this.editCouponForm.invalid) {
   
      return;
  
    }
    
    this.couponService.UpdateCoupon(this.couponList).subscribe(couponList=>{couponList})
   

     
      
    this.router.navigate(['company/UpdateCoupon']);
    }
    

   }



