import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AdminService } from "../service/admin.service";
import { InviterMembresComponent } from "../inviter-membres/inviter-membres.component";
import { AddCommissionComponent } from "../add-commission/add-commission.component";
import { MatTableDataSource } from "@angular/material/table";
import Swal from "sweetalert2";

@Component({
  selector: "app-commissions-list",
  templateUrl: "./commissions-list.component.html",
  styleUrls: ["./commissions-list.component.css"],
})
export class CommissionsListComponent implements OnInit {
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ["number", "date", "action"];
  dataSource = this.ELEMENT_DATA;
  dialogRef: any;
  allCommissions: any = [];
  constructor(public service: AdminService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllCommissions();
  }

  addCommission() {
    this.dialogRef = this.dialog.open(AddCommissionComponent, {
      panelClass: "contact-form-dialog",
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllCommissions();
    });
  }

  updateCommission(commission) {
    this.dialogRef = this.dialog.open(AddCommissionComponent, {
      panelClass: "contact-form-dialog",
      data: { commission: commission },
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllCommissions();
    });
  }

  inviteMembers(commission) {
    this.dialogRef = this.dialog.open(InviterMembresComponent, {
      panelClass: "contact-form-dialog",
      data: { commission: commission },
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllCommissions();
    });
  }

  getAllCommissions() {
    this.service.getAllCommissions().subscribe((result) => {
      this.allCommissions = result;
      this.dataSource = new MatTableDataSource(this.allCommissions);
    });
  }

  deleteCommission(id) {
    Swal.fire({
      title: "etes vous sur de le supprimer?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.value) {
        this.service.deleteCommission(id).subscribe((res) => {
          this.getAllCommissions();
        });
        Swal.fire(
          "Deleted!",
          "",
          "success"
        );
      }
    });
  }
}
