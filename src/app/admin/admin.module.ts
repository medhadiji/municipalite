import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RegisteremployeComponent } from './registeremploye/registeremploye.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent,
  children: [

    {
      path: 'admindashboard',
      component: AdmindashboardComponent
    },

    {
      path: 'registeremploye',
      component: RegisteremployeComponent
    }
  ]}

];

@NgModule({
  declarations: [AdminLayoutComponent, AdmindashboardComponent, RegisteremployeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
