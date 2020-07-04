import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/admin/service/admin.service";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  constructor(public service: AdminService, public authService: AuthService) {}

  ngOnInit() {
    this.service
      .getUserById(localStorage.getItem("uid"))
      .subscribe((result) => {
        console.log(result);
        this.profile = result;
      });
  }

  async openChange() {
    const { value: formValues } = await Swal.fire({
      title: "Changer mot de passe",
      html:
        '<input type="password" id="swal-input1" class="swal2-input" placeholder="ancien mot de passe">' +
        '<input type="password" id="swal-input2" class="swal2-input" placeholder="nouveau mot de passe">' +
        '<input type="password" id="swal-input3" class="swal2-input" placeholder="retaper nouveau mot de passe">',
      focusConfirm: false,
      inputValidator: (value) => {
        if (
          document.getElementById("swal-input2")["value"] !==
          document.getElementById("swal-input3")["value"]
        ) {
          return "You need to choose something!";
        }
      },
      preConfirm: () => {
        return [
          document.getElementById("swal-input1")["value"],
          document.getElementById("swal-input2")["value"],
          document.getElementById("swal-input3")["value"],
        ];
      },
    });

    if (formValues) {
      console.log(formValues);
      if (formValues[1] != formValues[2]) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Mot de passes non identiques!",
        });
      } else {
        console.log({
          lastPassword: formValues[0],
          password: formValues[1],
        });
        this.authService
          .changePassword(localStorage.getItem("uid"), {
            lastPassword: formValues[0],
            password: formValues[1],
          })
          .subscribe((result) => {
            console.log(result);
            if (result === "BAD_REQUEST") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Verifier votre ancien mot de passe!",
              });
            } else {
              Swal.fire(" Mot de passe modifié!", "", "success");
            }
          });
      }
      // Swal.fire(JSON.stringify(formValues));
    }
  }
}
