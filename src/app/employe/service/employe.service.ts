import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DossierComponent } from "../dossier/dossier.component";
import { dossier } from "src/app/shared/models/dossier";

@Injectable({
  providedIn: "root",
})
export class EmployeService {
  endpoint: string = "http://localhost:8080/";

  dossier: dossier;

  constructor(private http: HttpClient) {}

  getAllNature() {
    let api = `${this.endpoint}natures/getAll`;
    return this.http.get(api);
  }

  getAllTerrain() {
    let api = `${this.endpoint}terrain/getAll`;
    return this.http.get(api);
  }

  getAllConstruction() {
    let api = `${this.endpoint}construction/getAll`;
    return this.http.get(api);
  }

  getAllDossier() {
    let api = `${this.endpoint}dossiers/getAll`;
    return this.http.get(api);
  }

  addDossier(dossier: dossier) {
    let api = `${this.endpoint}dossiers/save`;
    return this.http.post(api, dossier);
  }

  addTerrain(terrain) {
    let api = `${this.endpoint}terrain/saveTerrain`;
    return this.http.post(api, terrain);
  }
}
