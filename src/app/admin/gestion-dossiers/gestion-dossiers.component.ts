import { NavigationExtras, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { AdminService } from "../service/admin.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-gestion-dossiers",
  templateUrl: "./gestion-dossiers.component.html",
  styleUrls: ["./gestion-dossiers.component.css"],
})
export class GestionDossiersComponent implements OnInit {
  allDossiers: any = [];
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = [
    "number",
    "date",
    "commission",
    "decision",
    "proprietere",
    "nature",
    "action",
  ];
  dataSource = this.ELEMENT_DATA;
  allCommissions: any = [];
  selectedCommission: any;
  options: any = [];
  decisons: any = ["Accépté", "Refusé", "Ajourné"];
  constructor(public service: AdminService, public router: Router) {}

  ngOnInit() {
    this.getAllDossiers();
    this.getAllCommissions();
  }
  getAllDossiers() {
    this.service.getAllDossiers().subscribe((result) => {
      this.allDossiers = result;
      this.dataSource = new MatTableDataSource(this.allDossiers);
      console.log(this.allDossiers);
    });
  }

  addToCommission(element) {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Affecter ce dossier à une commission",

      input: "select",
      inputOptions: this.options,
      inputPlaceholder: "Commission",
      // inputValue: this.selectedCommission,
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: "Oui",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      backdrop: false,
      background: "white",
      preConfirm: () => {
        if (Swal.getInput().value) {
          console.log(parseInt(Swal.getInput().value));
          this.service
            .affectDossierToCommission(element.id, Swal.getInput().value)
            .subscribe((result) => {
              this.getAllDossiers();
              Swal.fire("Affecté!", "", "success");
            });
        } else {
          Swal.showValidationMessage("entrée manquante");
        }
      },
    }).then((data) => {});
  }

  getAllCommissions() {
    this.service.getAllCommissions().subscribe((result) => {
      this.allCommissions = result;
      this.setOptions();
      console.log(this.options);
    });
  }

  setOptions() {
    this.options = {};
    this.allCommissions.forEach((element) => {
      console.log(element.id);
      this.options[element.id] = new Date(element.date).toDateString();
    });
  }

  dossierDecision(element) {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Prendre une décision",

      input: "select",
      inputOptions: this.decisons,
      inputPlaceholder: "Decision",
      // inputValue: this.selectedCommission,
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: "Oui",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      backdrop: false,
      background: "white",
      preConfirm: () => {
        if (Swal.getInput().value) {
          let desc = this.decisons[Swal.getInput().value];
          console.log(desc);
          let dossier: any = element;
          this.service
            .addDecison({ decision: desc, id_dossier: element.id })
            .subscribe((result) => {
              let res: any = result;
              dossier.id_decision = res.id;
              this.service
                .dossierDecision(element.id, dossier)
                .subscribe((val) => {
                  this.getAllDossiers();
                  Swal.fire(desc, "", "success");
                });
            });
        } else {
          Swal.showValidationMessage("entrée manquante");
        }
      },
    }).then((data) => {});
  }

  viewDossier(id) {
    const navData: NavigationExtras = {
      queryParams: {
        id: id,
      },
    };
    this.router.navigate(["admin/dossierDetails"], navData);
  }
}
