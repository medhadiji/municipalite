import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeService } from "../service/employe.service";
import { dossier } from "src/app/shared/models/dossier";

export interface prop {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-dossier",
  templateUrl: "./dossier.component.html",
  styleUrls: ["./dossier.component.css"],
})
export class DossierComponent implements OnInit {
  isLinear = false;
  allNature: any = [];
  allTerrain: any = [];
  allConstruction: any = [];

  d: dossier = new dossier();

  today: number = Date.now();
  fFormGroup: FormGroup;
  proprietaire: prop[] = [];
  nature: any;
  type_construction: any;
  pieces: any = [];
  constructor(
    private _formBuilder: FormBuilder,
    private service: EmployeService,
    public router: Router
  ) {}

  form: FormGroup;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isEditable = true;

  ngOnInit() {
    this.getAllNature();
    this.getAllConstruction();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
      firstCtrl1: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ["", Validators.required],
    });
  }

  getAllNature() {
    this.service.getAllNature().subscribe((result) => {
      console.log(result);
      this.allNature = result;
    });
  }

  getAllTerrain() {
    this.service.getAllTerrain().subscribe((result) => {
      console.log(result);
      this.allTerrain = result;
    });
  }
  getAllConstruction() {
    this.service.getAllConstruction().subscribe((result) => {
      console.log(result);
      this.allConstruction = result;
    });
  }

  addDossier() {
    let dossier: any = {};
    dossier.id_nature = this.nature;
    dossier.id_type_construction = this.type_construction;
    dossier.id_terrain = null;
    dossier.nom_proprietaire = this.thirdFormGroup.value["thirdCtrl"];
    dossier.pieces = JSON.stringify(this.pieces);
    let terrain: any = {
      numero_terrain: this.secondFormGroup.value["secondCtrl"],
    };
    this.service.addTerrain(terrain).subscribe((result) => {
      let rs: any;
      rs = result;
      dossier.id_terrain = rs.id;
      dossier.date = new Date().getTime();
      this.service.addDossier(dossier).subscribe((result) => {
        this.router.navigate(['employe']);
      });
    });
  }

  check(event, val) {
    if (event.checked) {
      this.pieces.push(val);
    } else {
      this.pieces.splice(this.pieces.indexOf(val), 1);
    }
  }
}
