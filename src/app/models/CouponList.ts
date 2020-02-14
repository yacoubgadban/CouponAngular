export class CouponList{

  public id:number;
  
 
  
  constructor(
    public companyId?:number,
    public categoryId?:number,
    public title?:string,
    public description?:string,
    public start_date?:Date,
    public end_date?:Date, 
    public amount?:number,
    public price?:number,
    public image?:string ){}

}
  


