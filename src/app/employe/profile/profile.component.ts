import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/admin/service/admin.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  constructor(public service: AdminService) {}

  ngOnInit() {
    this.service
      .getUserById(localStorage.getItem("uid"))
      .subscribe((result) => {
        console.log(result)
        this.profile = result;
      });
  }
}
