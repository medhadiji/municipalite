import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-layout',
  templateUrl: './employe-layout.component.html',
  styleUrls: ['./employe-layout.component.css']
})
export class EmployeLayoutComponent implements OnInit {
  showSideNav=true;
  logout() {

  }

  ngOnInit() {
    this.showSideNav=true;

  }
}
