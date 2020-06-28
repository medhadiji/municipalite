import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, public service: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    if (this.service.isLoggedIn()) {
      console.log(
        route.data.roles.indexOf(localStorage.getItem("role")),
        route.data.roles,
        localStorage.getItem("role")
      );
      if (
        !route.data.roles ||
        route.data.roles.indexOf(localStorage.getItem("role")) !== -1
      ) {
        return true;
      } else {
        this.router.navigate(["/"]);
        return false;
      }
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
