import { AdminService } from "./../service/admin.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-add-commission",
  templateUrl: "./add-commission.component.html",
  styleUrls: ["./add-commission.component.css"],
})
export class AddCommissionComponent implements OnInit {
  commission: any = { date: null };
  act: any = "add";
  constructor(
    public dialogRef: MatDialogRef<AddCommissionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: AdminService
  ) {}

  ngOnInit() {
    if (this.data) {
      this.act = "edit";
      this.commission.date = new Date(this.data.commission.date);
    }
  }

  addCommission() {
    this.commission.date = this.commission.date.getTime();
    console.log(this.commission.date);
    this.service.addCommission(this.commission).subscribe((result) => {
      this.dialogRef.close();
    });
  }

  updateCommission() {
    this.commission.date = this.commission.date.getTime();
    this.commission.id = this.data.commission.id;
    this.service
      .updateCommission(this.data.commission.id, this.commission)
      .subscribe((result) => {
        this.dialogRef.close();
      });
  }
}
