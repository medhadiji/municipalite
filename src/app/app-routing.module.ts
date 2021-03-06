import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';



const routes: Routes = [
/*   { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '', loadChildren: './public/public.module#PublicModule'},
  { path: 'employe', loadChildren: './employe/employe.module#EmployeModule'} */

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
   canActivate: [AuthGuard],
    data: {
      roles: [
        'ROLE_ADMIN'
      ]
    }
  },
  {
    path: 'citoyen',
    loadChildren: () => import('./citoyen/citoyen.module').then(m => m.CitoyenModule),
   canActivate: [AuthGuard],
    data: {
      roles: [
        'ROLE_USER'
      ]
    }
  },
  {
    path: 'employe',
    loadChildren: () => import('./employe/employe.module').then(m => m.EmployeModule),
    canActivate: [AuthGuard],
    data: {
      roles: [
        'ROLE_PM'
      ]
    }
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },



  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
