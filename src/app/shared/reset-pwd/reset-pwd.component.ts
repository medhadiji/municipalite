import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-reset-pwd",
  templateUrl: "./reset-pwd.component.html",
  styleUrls: ["./reset-pwd.component.css"],
})
export class ResetPwdComponent implements OnInit {
  public form: FormGroup;
  userEmail: any;
  token: any;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    (this.form = this.fb.group({
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      password2: [null],
    })),
      { validator: this.checkPasswords };
  }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      console.log(val);
      this.userEmail = val.email;
      this.token = val.token;
    });
  }

  reset() {
    this.authService
      .resetPassword(this.userEmail, this.form.value)
      .subscribe((res) => {
        Swal.fire(`Success`);
        this.router.navigateByUrl("/login");
      });
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.get("password").value;
    let confirmPass = group.get("password2").value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
