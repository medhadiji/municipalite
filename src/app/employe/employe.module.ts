import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeLayoutComponent } from './employe-layout/employe-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmployeLayoutComponent }
];


@NgModule({
  declarations: [EmployeLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeModule { }
