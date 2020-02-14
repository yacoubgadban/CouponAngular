import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
  public couponList:CouponList[];

  constructor(private couponService:CouponServiceService,private router:Router) { }

  ngOnInit() {
    this.couponService.getCoupons().subscribe((data)=>{this.couponList=data});

  }

 
   
 
public goToEditCoupon(couponList){
this.couponService.settCoupon(couponList);
this.router.navigate(['company/UpdateCoupon/EditCompany']);  
}
        
   NewCoupon(){
   let couponList=new CouponList();
   this.couponService.settCoupon(couponList);
   this.router.navigate(['company/UpdateCoupon/EditCompany']); 
 }

}
