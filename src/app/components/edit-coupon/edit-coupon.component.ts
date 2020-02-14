import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {

  public couponList=new CouponList();
  constructor(private couponService:CouponServiceService,private router:Router) { }

  ngOnInit() {
    this.couponList=this.couponService.getCoupon();
  console.log(this.couponList);
  }

  UpdateCoupon(){
    if(this.couponService.UpdateCoupon(this.couponList).subscribe(couponList=>{couponList})){
     alert("Company updated success !")
    this.router.navigate(['company/UpdateCoupon']);
    }
    console.log(this.couponList)

   }


}
