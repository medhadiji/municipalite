import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { RegisterComponent } from "./register/register.component";
import { DossierDetailsComponent } from "./dossier-details/dossier-details.component";
import { ProfileComponent } from '../employe/profile/profile.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DossierDetailsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    RouterModule  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    LoginComponent,
    RegisterComponent,
    DossierDetailsComponent,
    ProfileComponent
  ],
})
export class SharedModule {}
