import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouponList } from '../models/CouponList';

@Injectable({
  providedIn: 'root'
})
export class CouponServiceService {
couponList:CouponList;

  constructor(private http:HttpClient) { }
  
  company_id:number=99;

  public getCoupons():Observable<CouponList[]>{
   return this.http.get<CouponList[]>("http://localhost:8080/coupon/company"+"/"+this.company_id);
 
  }


  public CreateCoupon(couponList:CouponList):Observable<CouponList[]>{

    return this.http.post<CouponList[]>("http://localhost:8080/coupon/add",couponList);

  }


  public DeleteCoupon(id):Observable<CouponList>{
    return this.http.delete<CouponList>('http://localhost:8080/coupon/delete'+'/'+id);
  }

  public UpdateCoupon(couponList:CouponList):Observable<CouponList[]>{
    return this.http.put<CouponList[]>("http://localhost:8080/coupon/update/"+"/"+couponList.id,couponList,{withCredentials:false});


}

public settCoupon(couponList:CouponList){
  this.couponList=couponList;
  }

  public getCoupon(){
   return this.couponList;
  }

 

}
