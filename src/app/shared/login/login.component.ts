import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  private loadingSubs: Subscription;

  public form:FormGroup;

  constructor(
    public fb: FormBuilder,
  /*   public authService: AuthService, */
    public router: Router,

  ) {


    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });

  }

  ngOnInit() { }

  loginUser() {
    this.isLoading=true;
   // this.authService.signIn(this.form.value)
  }
  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}


