import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CouponList } from 'src/app/models/CouponList';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(private service:MainService) { }
  public couponList:CouponList[];
  ngOnInit() {
  this.service.getAllCoupons().subscribe((data)=>{this.couponList=data});
  }

}
