import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../services/auth.service";
import Swal from "sweetalert2";

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
      username: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
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
      localStorage.setItem("uid", res.id);
      if (res.authorities[0].authority === "ROLE_USER") {
        this.router.navigateByUrl("/citoyen");
      } else if (res.authorities[0].authority === "ROLE_PM") {
        this.router.navigateByUrl("/employe");
      } else if (res.authorities[0].authority === "ROLE_ADMIN") {
        this.router.navigateByUrl("/admin");
      }
      this.isLoading = false;
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  async resetPwd() {
    const { value: email } = await Swal.fire({
      title: "Reinitialiser votre mot de passe",
      input: "email",
      inputPlaceholder: "Entrer votre email",
    });

    if (email) {
      this.authService.resetPasswordSend(email).subscribe((res) => {
        Swal.fire(`Verifier l'adresse: ${email}`);
      });
    }
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
