import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { AdminService } from "../service/admin.service";
import { RegisteremployeComponent } from "../registeremploye/registeremploye.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/shared/services/auth.service";
import Swal from "sweetalert2";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.css"],
})
export class AdmindashboardComponent implements OnInit {
  allEmployee: any = [];
  dialogRef: any;

  constructor(
    public service: AdminService,
    public dialog: MatDialog,
    public authService: AuthService
  ) {}

  displayedColumns: string[] = ["nom", "email", "address", "phone", "actions"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getAllEmployee();
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllEmployee() {
    this.service.getAllEmploye().subscribe((result) => {
      this.allEmployee = result;
      this.dataSource = new MatTableDataSource(this.allEmployee);
      console.log(this.allEmployee);
    });
  }

  addEmployee() {
    this.dialogRef = this.dialog.open(RegisteremployeComponent, {
      panelClass: "contact-form-dialog",
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllEmployee();
    });
  }

  updateEmploye(empl) {
    this.dialogRef = this.dialog.open(RegisteremployeComponent, {
      panelClass: "contact-form-dialog",
      data: { employee: empl },
    });
    this.dialog.afterAllClosed.subscribe((val) => {
      this.getAllEmployee();
    });
  }

  deleteEmploye(id) {
    Swal.fire({
      title: "etes vous sur de le supprimer?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.value) {
        this.authService.deleteUser(id).subscribe((result) => {
          this.getAllEmployee();
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
