import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  
 
  constructor(private couponService:CouponServiceService,private router:Router) { }

 
 public couponList:CouponList[];


  ngOnInit() {
    this.couponService.id=localStorage.getItem("companyId");
   this.couponService.getCouponByCompanyId(localStorage.getItem("companyId"))
   .subscribe((data)=>{this.couponList=data
    console.log(this.couponList)
  });
    }

    
    logOut(){
      localStorage.removeItem("admin")
      localStorage.removeItem("company")
      localStorage.removeItem("client")
      this.router.navigate(['login']);
      
    }
  

}
