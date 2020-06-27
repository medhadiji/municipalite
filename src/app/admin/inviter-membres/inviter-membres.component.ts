import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AdminService } from "../service/admin.service";

@Component({
  selector: "app-inviter-membres",
  templateUrl: "./inviter-membres.component.html",
  styleUrls: ["./inviter-membres.component.css"],
})
export class InviterMembresComponent implements OnInit {
  members: any = ["Boots", "Clogs", "Loafers", "Moccasins", "Sneakers"];
  allMembers: any = [];
  commissionMembers: any = [];
  constructor(
    public dialogRef: MatDialogRef<InviterMembresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: AdminService
  ) {}

  ngOnInit() {
    this.getCommissionMembers();
    this.getAllMembers();
  }

  invite(member) {
    member.commission_id = this.data.commission.id;
    this.service
      .mailMember(member.id, this.data.commission.id, "invite")
      .subscribe((resultat) => {
        console.log(resultat);
        this.getCommissionMembers();
      });
  }

  resetInvit(member) {
    member.commission_id = null;
    this.service
      .mailMember(member.id,this.data.commission.id, "delete")
      .subscribe((resultat) => {
        console.log(resultat);
        this.getCommissionMembers();
      });
  }

  getAllMembers() {
    this.service.getAllMembre().subscribe((result) => {
      this.allMembers = result;
    });
  }

  getCommissionMembers() {
    this.service
      .getCommissionMembres(this.data.commission.id)
      .subscribe((result) => {
        console.log(result);
        this.commissionMembers = result;
      });
  }

  existInCommission(id) {
    let res: any = false;
    this.commissionMembers.forEach((element) => {
      if (element.id === id) {
        res = true;
        return res;
      }
    });
    return res;
  }
}
