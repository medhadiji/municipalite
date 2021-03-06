import { Router, NavigationExtras } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { EmployeService } from "../service/employe.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "test1", weight: 1, symbol: "d1" },
  { position: 2, name: "test2", weight: 2, symbol: "d2" },
  { position: 3, name: "test3", weight: 3, symbol: "d3" },
  { position: 4, name: "test4", weight: 4, symbol: "d4" },
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  allDossier: any = [];
  allDossiers: any = [];

  constructor(private service: EmployeService, public router: Router) {}
  displayedColumns: string[] = [
    "number",
    "date",
    "commission",
    "decision",
    "proprietere",
    "nature",
    "action",
  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getAllDossiers();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllDossiers() {
    this.service.getAllDossiersWithDetails().subscribe((result) => {
      this.allDossiers = result;
      this.dataSource = new MatTableDataSource(this.allDossiers);
      console.log(this.allDossiers);
    });
  }

  viewDossier(id) {
    const navData: NavigationExtras = {
      queryParams: {
        id: id,
      },
    };
    this.router.navigate(["employe/dossierDetails"], navData);
  }
}
