import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  endpoint: string = "http://localhost:8080/";
  constructor(private http: HttpClient) {}

  getAllEmploye() {
    let api = `${this.endpoint}auth/getUsersByRole/pm`;
    return this.http.get(api);
  }

  addMembreCommission(membre) {
    let api = `${this.endpoint}membrecommission/save`;
    return this.http.post(api, membre);
  }

  updateMembreCommission(membre, id) {
    let api = `${this.endpoint}membrecommission/updateMemberById`;
    return this.http.post(api + "/" + id, membre);
  }

  getAllMembre() {
    let api = `${this.endpoint}membrecommission/getAll`;
    return this.http.get(api);
  }

  deleteMembreById(id) {
    let api = `${this.endpoint}membrecommission/deleteMemberById`;
    return this.http.get(api + "/" + id);
  }

  addCommission(commission) {
    let api = `${this.endpoint}commission/saveCommission`;
    return this.http.post(api, commission);
  }

  getAllCommissions() {
    let api = `${this.endpoint}commission/getAll`;
    return this.http.get(api);
  }

  getCommissionById(id) {
    let api = `${this.endpoint}commission/getCommissionById`;
    return this.http.get(api + '/' + id);
  }

  updateCommission(id, commission) {
    let api = `${this.endpoint}commission/updateCommission`;
    return this.http.post(api + "/" + id, commission);
  }

  deleteCommission(id) {
    let api = `${this.endpoint}commission/deleteCommission`;
    return this.http.get(api + "/" + id);
  }

  getCommissionMembres(id) {
    let api = `${this.endpoint}commission/getCommissionMembersById`;
    return this.http.get(api + "/" + id);
  }

  getCommissionDossiers(id) {
    let api = `${this.endpoint}commission/getCommissionDossiers`;
    return this.http.get(api + "/" + id);
  }

  mailMember(id, comId, subject) {
    let api = `${this.endpoint}membrecommission/invite`;
    return this.http.get(api + "/" + id + "/" + comId + "/" + subject);
  }

  getAllDossiers() {
    let api = `${this.endpoint}dossiers/getAllDossiersWithDetails`;
    return this.http.get(api);
  }

  getOneDossierDetails(id) {
    let api = `${this.endpoint}dossiers/getOneDossierDetails`;
    return this.http.get(api + '/' + id);
  }

  affectDossierToCommission(idDossier, idCommission) {
    let api = `${this.endpoint}dossiers/affectToCommission`;
    return this.http.get(api + "/" + idDossier + "/" + idCommission);
  }

  dossierDecision(id, dossier) {
    let api = `${this.endpoint}dossiers/updateById`;
    return this.http.post(api + "/" + id, dossier);
  }

  addDecison(decision) {
    let api = `${this.endpoint}decision/addDecision`;
    return this.http.post(api, decision);
  }

  getUserById(id){
    let api = `${this.endpoint}auth/getUsersById`;
    return this.http.get(api + '/' + id);
  }
}
