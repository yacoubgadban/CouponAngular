import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { empty, onErrorResumeNext } from 'rxjs';
import { error, isError, isNull, isUndefined } from 'util';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public category=new Categories();
  category2:Categories;
  
  constructor(private service:CategoryService,private router:Router) { }

  
  ngOnInit() {

  
  }
  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
  

  }
  
addCategory(){
  localStorage.setItem( "cateName",this.category.name);
  this.service.getCategoryByName(this.category.name).subscribe((category2=>{this.category2=category2
    if(category2!=undefined){
        alert("ERROR: this category has been  already added !!!?")
  } else{
        this.service.createCategory(this.category).subscribe((category=>{category})),((err)=>{alert("err")}); 
         alert("success: category has been created!")
          window.location.reload();
  }
   }));

  
 }
}
