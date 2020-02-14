import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CouponList } from '../models/CouponList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
couponList:CouponList[];
  constructor(private http:HttpClient) { }


public getAllCoupons():Observable<CouponList[]>{
  return this.http.get<CouponList[]>("http://localhost:8080/coupon/getall");
}







}
