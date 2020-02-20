import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
public category:Categories[];
category2:Categories;
  constructor(private service:CategoryService,private router:Router) { }

  ngOnInit() {
    this.service.getCategory().subscribe((data)=>{this.category=data});

  }
  public deleteCategory(id:number){
    this.service.deleteCategory(id).subscribe((data)=>{this.category2=data});
  }

  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }
}
