import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeremploye',
  templateUrl: './registeremploye.component.html',
  styleUrls: ['./registeremploye.component.css']
})
export class RegisteremployeComponent implements OnInit {

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


    });

  }

  ngOnInit() {
  }


  register() {

    let user = this.form.value;
    user.username = this.form.value['email'];
    user.validate=false;
    user.userRole="pm";

    console.log(user)
      this.authService.signup(user).subscribe(val=>{
        console.log(val);
        //this.router.navigateByUrl('/login');



      })

      }

}
