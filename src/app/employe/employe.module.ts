import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeLayoutComponent } from './employe-layout/employe-layout.component';
import { Routes, RouterModule } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierComponent } from './dossier/dossier.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: EmployeLayoutComponent },


  {
    path: 'dossier',
    component: DossierComponent
  }

];


@NgModule({
  declarations: [EmployeLayoutComponent,  DossierComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeModule { }
