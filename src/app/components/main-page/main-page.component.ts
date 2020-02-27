import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CouponList } from 'src/app/models/CouponList';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Categories } from 'src/app/models/Categories';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientList } from 'src/app/models/ClientList';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(private mainService:MainService,private service:CouponServiceService,private router:Router) { }
  public couponList:CouponList[];
  public couponList2=new CouponList();
  public category:Categories[];
  public couponList3:CouponList[];
  public couponList4:CouponList[];
  public couponList5:CouponList[];
  public couponList6:CouponList[];
  
  client:ClientList[]
  firstName:string;
  lastName:string;
  ngOnInit() {
  
  this.firstName=localStorage.getItem("firstName");
  this.lastName=localStorage.getItem("lastName");
  
  
  
  this.mainService.getCouponsByCategory(2).subscribe((couponList)=>{this.couponList=couponList});
  this.mainService.getCouponsByCategory(3).subscribe((couponList3)=>{this.couponList3=couponList3});
  this.mainService.getCouponsByCategory(4).subscribe((couponList4)=>{this.couponList4=couponList4});
  this.mainService.getCouponsByCategory(5).subscribe((couponList5)=>{this.couponList5=couponList5});
  this.mainService.getCouponsByCategory(6).subscribe((couponList6)=>{this.couponList6=couponList6});
  

  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }


getCouponByCategory(){
  
}


buyCoupon(couponList){
  
  this.couponList2=couponList;
  this.mainService.buyCoupon(this.couponList['id']).subscribe((couponList)=>{couponList});
  localStorage.setItem("couponId",couponList['id'])
  this.mainService.couponID=couponList['id'];  
  this.mainService.clientID=localStorage.getItem("ClientId")
  
    
    
    
     window.location.reload();
    
    }
    
    

   }
  
 
 
  




