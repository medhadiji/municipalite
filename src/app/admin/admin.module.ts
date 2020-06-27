import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdmindashboardComponent } from "./admindashboard/admindashboard.component";
import { RegisteremployeComponent } from "./registeremploye/registeremploye.component";
import { CommissionsListComponent } from "./commissions-list/commissions-list.component";
import { AddCommissionComponent } from "./add-commission/add-commission.component";
import { InviterMembresComponent } from "./inviter-membres/inviter-membres.component";
import { MembreCommissionListComponent } from "./membre-commission-list/membre-commission-list.component";
import { AddMembreCommissionComponent } from "./add-membre-commission/add-membre-commission.component";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "admindashboard",
        component: AdmindashboardComponent,
      },

      {
        path: "registeremploye",
        component: RegisteremployeComponent,
      },
      {
        path: "commissions",
        component: CommissionsListComponent,
      },
      {
        path: "membre-commissions",
        component: MembreCommissionListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdmindashboardComponent,
    RegisteremployeComponent,
    CommissionsListComponent,
    AddCommissionComponent,
    InviterMembresComponent,
    MembreCommissionListComponent,
    AddMembreCommissionComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  entryComponents: [
    RegisteremployeComponent,
    InviterMembresComponent,
    AddCommissionComponent,
    AddMembreCommissionComponent,
  ],
})
export class AdminModule {}
