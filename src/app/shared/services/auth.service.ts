import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  httpOptions: any = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  public username: string;
  public password: string;

  endpoint: string = "http://localhost:8080/";
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: User): Observable<any> {
    let api = `${this.endpoint}auth/signup`;
    return this.http.post(api, user, this.httpOptions);
  }

  signin(user: any) {
    let api = `${this.endpoint}auth/signin`;
    return this.http.post(api, user, this.httpOptions);
  }

  updateUser(id: any, user: User): Observable<any> {
    let api = `${this.endpoint}auth/updateUser`;
    return this.http.post(api + "/" + id, user);
  }

  deleteUser(id: any): Observable<any> {
    let api = `${this.endpoint}auth/deleteUser`;
    return this.http.get(api + "/" + id);
  }

  isLoggedIn() {
    return localStorage.getItem("token") ? true : false;
  }

  resetPasswordSend(email) {
    let api = `${this.endpoint}auth/resetPWDSend`;
    return this.http.get(api + "/" + email);
  }

  resetPassword(email, password) {
    let api = `${this.endpoint}auth/resetPassword`;
    return this.http.post(api + "/" + email, password);
  }

  changePassword(id, pwd) {
    let api = `${this.endpoint}auth/changePWD`;
    return this.http.post(api + "/" + id, pwd);
  }
}
