import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(private mainService:MainService,private service:CouponServiceService) { }
  public couponList:CouponList[];
  public couponList2=new CouponList();
  
 
  ngOnInit() {
  this.mainService.getAllCoupons().subscribe((data)=>{this.couponList=data});
  
  

}




buyCoupon(couponList){
  
  this.couponList2=couponList;
  this.mainService.UpdateCoupon(this.couponList2).subscribe((couponList)=>{couponList});
  
     console.log(couponList);
     console.log(couponList['amount']);
     console.log(this.couponList2)
    
    }
    

   }
  
 
 
  




