import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { Time } from '@angular/common';
import { timer, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router ,private headService:HeaderService ) { }

public  currentDate:Date;

public currentTime:Time;


ngOnInit()  {
 
  


  this.currentDate=new Date();
  
  
 

 
  
}




}
