import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {
  endpoint : string ="http://localhost:8080/";

  constructor(private http : HttpClient) { }


  getUserById(id){
    let api = `${this.endpoint}auth/getUsersById`;
    return this.http.get(api + '/' +localStorage.getItem('uid'));
  }

  getOneDossierDetails(id) {
    let api = `${this.endpoint}dossiers/getOneDossierDetails`;
    return this.http.get(api + '/' + id);
  }

}
