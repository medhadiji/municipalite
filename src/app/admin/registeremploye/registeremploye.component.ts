import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-registeremploye",
  templateUrl: "./registeremploye.component.html",
  styleUrls: ["./registeremploye.component.css"],
})
export class RegisteremployeComponent implements OnInit {
  public form: FormGroup;
  act: any = "add";
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public dialogRef: MatDialogRef<RegisteremployeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.act = "update";
      this.form = this.fb.group({
        email: [
          this.data.employee.email,
          Validators.compose([Validators.required, Validators.email]),
        ],
        name: [this.data.employee.name, Validators.required],
        username: [this.data.employee.name, Validators.required],
        address: [this.data.employee.address, Validators.required],
        phone: [null, Validators.required],
      });
    } else {
      this.form = this.fb.group({
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(5)]),
        ],
        name: [null, Validators.required],
        username: [null, Validators.required],
        address: [null, Validators.required],
        phone: [null, Validators.required],
      });
    }
  }

  register() {
    let user = this.form.value;
    user.username = this.form.value["email"];
    user.validate = false;
    user.userRole = "pm";
    user.phone = this.form.value["phone"];
     console.log(user)
    this.authService.signup(user).subscribe((val) => {
      this.dialogRef.close();
    });
  }

  updateUser() {
    let usr: any = this.data.employee;
    usr.address = this.form.value["address"];
    usr.email = this.form.value["email"];
    usr.name = this.form.value["name"];
    usr.username = this.form.value["email"];
    usr.phone = this.form.value["phone"];
    console.log(usr);
    this.authService.updateUser(usr.id, usr).subscribe((val) => {
      this.dialogRef.close();
    });
  }
}
