import { RegisterComponent } from './../shared/register/register.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../shared/login/login.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeLayoutComponent } from '../employe/employe-layout/employe-layout.component';
import { GuestGuard } from '../shared/services/guest-gurad';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: 'dashboard', component: LoginComponent, canActivate: [AuthGuard] },


]}
]


@NgModule({
  declarations: [PublicLayoutComponent, LoginPageComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
