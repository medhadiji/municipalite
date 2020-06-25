import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  endpoint : string ="http://localhost:8080/";

  constructor(private http : HttpClient) { }

  getAllNature(){
    let api = `${this.endpoint}natures/getAll`;
    return this.http.get(api);
  }

  getAllTerrain(){
    let api = `${this.endpoint}terrain/getAll`;
    return this.http.get(api);
  }

  getAllConstruction(){
    let api = `${this.endpoint}construction/getAll`;
    return this.http.get(api);
  }

  getAllEmploye(){
    let api = `${this.endpoint}/getAll`;
    return this.http.get(api);
  }


}
