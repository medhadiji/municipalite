import { Component, OnInit } from "@angular/core";
import { AddMembreCommissionComponent } from "../add-membre-commission/add-membre-commission.component";
import { MatDialog } from "@angular/material/dialog";
import { AdminService } from "../service/admin.service";
import { MatTableDataSource } from "@angular/material/table";
import Swal from "sweetalert2";

@Component({
  selector: "app-membre-commission-list",
  templateUrl: "./membre-commission-list.component.html",
  styleUrls: ["./membre-commission-list.component.css"],
})
export class MembreCommissionListComponent implements OnInit {
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = [
    "nom",
    "email",
    "phone",
    "address",
    "type",
    "action",
  ];
  dataSource = this.ELEMENT_DATA;
  dialogRef: any;
  allCommissions: any = [];
  constructor(public service: AdminService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllMembers();
  }

  addMembre() {
    this.dialogRef = this.dialog.open(AddMembreCommissionComponent, {
      panelClass: "contact-form-dialog",
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllMembers();
    });
  }

  updateMembre(membre) {
    this.dialogRef = this.dialog.open(AddMembreCommissionComponent, {
      panelClass: "contact-form-dialog",
      data: { membre: membre },
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllMembers();
    });
  }

  getAllMembers() {
    this.service.getAllMembre().subscribe((result) => {
      this.allCommissions = result;
      this.dataSource = new MatTableDataSource(this.allCommissions);
    });
  }

  deleteMembre(id) {
    Swal.fire({
      title: "etes vous sur de le supprimer?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.value) {
        this.service.deleteMembreById(id).subscribe((result) => {
          this.getAllMembers();
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
