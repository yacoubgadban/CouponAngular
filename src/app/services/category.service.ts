import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories:Categories;
  constructor(private http:HttpClient) { }

name:string;
public getCategory():Observable<Categories[]>{

return  this.http.get<Categories[]>("http://localhost:8080/category/getall");
}


public createCategory(categories:Categories):Observable<Categories[]>{

  return  this.http.post<Categories[]>("http://localhost:8080/category/add",categories);
  }


  public deleteCategory(id):Observable<Categories>{

    return  this.http.delete<Categories>("http://localhost:8080/category/delete"+"/"+id);
    }

    public getCategoryByName(name):Observable<Categories>{

      return  this.http.get<Categories>("http://localhost:8080/category/byname"+"/"+localStorage.getItem("cateName"));
      }

      public getCategoryById(id):Observable<Categories>{

        return  this.http.get<Categories>("http://localhost:8080/category/byid"+"/"+id);
        }

}
