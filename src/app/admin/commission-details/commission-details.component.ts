import { Component, OnInit } from "@angular/core";
import { AdminService } from "../service/admin.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-commission-details",
  templateUrl: "./commission-details.component.html",
  styleUrls: ["./commission-details.component.css"],
})
export class CommissionDetailsComponent implements OnInit {
  comId: any;
  commission: any;
  commissionDossiers: any = [];
  commissionMembers: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: AdminService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.comId = data.id;
      this.service.getCommissionById(this.comId).subscribe((val) => {
        this.commission = val;
        console.log(this.commission);
      });
      this.service.getCommissionDossiers(this.comId).subscribe((res) => {
        this.commissionDossiers = res;
        console.log(this.commissionDossiers);
      });
      this.service.getCommissionMembres(this.comId).subscribe((result) => {
        console.log(result);
        this.commissionMembers = result;
      });
    });
  }
}
