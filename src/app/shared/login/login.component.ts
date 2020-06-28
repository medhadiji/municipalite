import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  private loadingSubs: Subscription;

  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.form = this.fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {}

  loginUser() {
    this.isLoading = true;
    this.authService.signin(this.form.value).subscribe((result) => {
      console.log(result);
      let res: any = result;
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("role", res.authorities[0].authority);
      if (res.authorities[0].authority === "ROLE_USER") {
      } else if (res.authorities[0].authority === "ROLE_PM") {
        this.router.navigateByUrl("/employe");
      } else if (res.authorities[0].authority === "ROLE_ADMIN") {
        this.router.navigateByUrl("/admin");
      }
      this.isLoading = false;
    });
  }
  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
