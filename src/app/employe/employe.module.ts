import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeLayoutComponent } from './employe-layout/employe-layout.component';
import { Routes, RouterModule } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierComponent } from './dossier/dossier.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../shared/login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: EmployeLayoutComponent ,

children: [

  {
    path: 'dossier',
    component: DossierComponent
  },
  {
    path : '',component : DashboardComponent
  },
  {
    path : '/login', component : LoginComponent
  },
  {
    path : 'profile', component : ProfileComponent
  }
]

}

];


@NgModule({
  declarations: [EmployeLayoutComponent,  DossierComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeModule { }
