import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { CouponList } from 'src/app/models/CouponList';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  public couponList:CouponList[];

  constructor(private couponService:CouponServiceService) { }

  ngOnInit() {
    this.couponService.getCoupons().subscribe((data)=>{this.couponList=data});


  }

public deleteCoupon(id){
  this.couponService.DeleteCoupon(id).subscribe((couponList)=>{couponList});
  window.location.reload();

}

}
