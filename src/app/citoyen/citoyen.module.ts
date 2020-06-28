import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CitoyenLayoutComponent } from './citoyen-layout/citoyen-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MondossierComponent } from './mondossier/mondossier.component';


const routes: Routes = [
  { path: '', component: CitoyenLayoutComponent,
  children: [

    {
      path: '',
      component: MondossierComponent
    },
]}]
  ;



@NgModule({
  declarations: [CitoyenLayoutComponent, MondossierComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CitoyenModule { }
