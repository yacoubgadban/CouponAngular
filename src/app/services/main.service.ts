import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponList } from '../models/CouponList';
import { Observable } from 'rxjs';
import { Categories } from '../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class MainService {
couponList:CouponList;
  constructor(private http:HttpClient) { }
amount:number;
category:Categories[];
public getAllCoupons():Observable<CouponList[]>{
  return this.http.get<CouponList[]>("http://localhost:8080/coupon/getall");
}


public UpdateCoupon(couponList:CouponList):Observable<CouponList[]>{
  return this.http.put<CouponList[]>("http://localhost:8080/coupon/buy"+"/"+couponList.id,couponList,{withCredentials:false});


}
public getCouponsByCategory(id):Observable<CouponList[]>{
  return this.http.get<CouponList[]>("http://localhost:8080/coupon/category"+"/"+id);
}







}
