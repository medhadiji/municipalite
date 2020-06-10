import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });

  }

  ngOnInit() { }

  loginUser() {
    this.authService.signIn(this.form.value)
  }

}


