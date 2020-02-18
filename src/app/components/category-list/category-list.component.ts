import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
category:Categories[];
  constructor(private service:CategoryService) { }

  ngOnInit() {
this.service.getCategory().subscribe((data)=>{this.category=data});

  }



}
