import { AdminService } from "./../service/admin.service";
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-membre-commission",
  templateUrl: "./add-membre-commission.component.html",
  styleUrls: ["./add-membre-commission.component.css"],
})
export class AddMembreCommissionComponent implements OnInit {
  public form: FormGroup;
  act: any = "add";
  selectedValue: any = "architecte";
  types: any = ["architecte", "Président de la commune","autre"];
  constructor(
    public dialogRef: MatDialogRef<AddMembreCommissionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public service: AdminService,
    public router: Router
  ) {}

  ngOnInit() {
    if (this.data) {
      this.act = "update";
      console.log(this.data.membre);
      this.form = this.fb.group({
        name: [this.data.membre.name, Validators.required],
        email: [
          this.data.membre.email,
          Validators.compose([Validators.required, Validators.email]),
        ],
        address: [this.data.membre.address, Validators.required],
        phone: [this.data.membre.phone, Validators.required],
      });
      this.selectedValue = this.data.membre.type;
    } else {
      this.form = this.fb.group({
        name: [null, Validators.required],
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        address: [null, Validators.required],
        phone: [null, Validators.required],
      });
    }
  }

  add() {
    let membre: any;
    membre = this.form.value;
    membre.type = this.selectedValue;
    console.log(membre);
    this.service.addMembreCommission(membre).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
    });
  }

  update(){
    let membre: any;
    membre = this.form.value;
    membre.type = this.selectedValue;
    console.log(membre);
    this.service.updateMembreCommission(membre, this.data.membre.id).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
    });
  }
}
