import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
 
    public router: Router
  ) { }


  canActivate(route: ActivatedRouteSnapshot): any {

    if (!route.data.roles || route.data.roles.indexOf(localStorage.getItem("type")) !== -1) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }

  }
}



