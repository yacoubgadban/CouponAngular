import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public category=new Categories();
  constructor(private service:CategoryService) { }

  
  ngOnInit() {
  
  
  }
addCategory(){
  this.service.createCategory(this.category).subscribe((category=>{category}));
  window.location.reload();

}
}
