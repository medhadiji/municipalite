import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form:FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,

  ) {


    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'name' : [null,Validators.required],
      'username' : [null,Validators.required],
      'idDossier' : [null,Validators.required]
  /*     'cin':[null,Validators.required],
      'num':[null,Validators.required] */
    });

  }

  ngOnInit() { }

  register() {

let user = this.form.value;
user.username = this.form.value['email'];
user.validate=true;
user.userRole="user";

console.log(user)
  this.authService.signup(user).subscribe(val=>{
    console.log(val);
    this.router.navigateByUrl('/login');

  })

  }

}


