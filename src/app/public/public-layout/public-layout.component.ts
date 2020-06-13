import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
  
})
export class PublicLayoutComponent implements OnInit {
  direction='ltr'
 
  constructor() {}

  ngOnInit() {
   

  }
  switchDirection(){
  let lang=  localStorage.getItem('language');
  if (lang=='ar') {
   this.direction='rtl'
  }else{
    this.direction='ltr'
  }
  }
}
