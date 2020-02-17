import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  
 
  constructor(private couponService:CouponServiceService) { }

 
 public couponList:CouponList[];


  ngOnInit() {
    
   this.couponService.getCoupons().subscribe((data)=>{this.couponList=data});
    
    
    }


    
  

}