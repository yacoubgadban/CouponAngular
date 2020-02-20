import { Component, OnInit } from '@angular/core';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public couponList=new CouponList();
 
  constructor(private service:CouponServiceService,private router:Router) { }

  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }

public CreateCoupon(){

  this.service.CreateCoupon(this.couponList).subscribe((couponList=>{couponList}));
  window.location.reload();
}

}
