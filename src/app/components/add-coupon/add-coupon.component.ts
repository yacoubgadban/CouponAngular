import { Component, OnInit } from '@angular/core';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public couponList=new CouponList();
 
  constructor(private service:CouponServiceService) { }

  ngOnInit() {
  }


public CreateCoupon(){

  this.service.CreateCoupon(this.couponList).subscribe((couponList=>{couponList}));
  window.location.reload();
}

}
