import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
category:Categories[];
  constructor(private service:CategoryService,private router:Router) { }

  ngOnInit() {
this.service.getCategory().subscribe((data)=>{this.category=data});

  }

  logOut(){
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
    localStorage.removeItem("client")
    this.router.navigate(['login']);
    
  }

}
