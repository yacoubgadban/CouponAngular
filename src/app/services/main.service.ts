import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponList } from '../models/CouponList';
import { Observable } from 'rxjs';
import { Categories } from '../models/Categories';
import { ClientList } from '../models/ClientList';
import { Purchased } from '../models/Purchased';

@Injectable({
  providedIn: 'root'
})
export class MainService {
couponList:CouponList;
clientList:ClientList;
purchased:Purchased;
couponID:any;
constructor(private http:HttpClient) { }
amount:number;
category:Categories[];
clientID:any;


public getAllCoupons():Observable<CouponList[]>{
  return this.http.get<CouponList[]>("http://localhost:8080/coupon/getall");
}


public buyCoupon(clientID):Observable<CouponList[]>{
this.clientID=localStorage.getItem("ClientId")
this.couponID=localStorage.getItem("couponId")
 
  return this.http.put<CouponList[]>("http://localhost:8080/clients/buy"+"/"+this.clientID+"/"+this.couponID,{withCredentials:false});

}
public getCouponsByCategory(id):Observable<CouponList[]>{
  return this.http.get<CouponList[]>("http://localhost:8080/coupon/category"+"/"+id);
}








}
