import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "src/app/admin/service/admin.service";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: "app-dossier-details",
  templateUrl: "./dossier-details.component.html",
  styleUrls: ["./dossier-details.component.css"],
})
export class DossierDetailsComponent implements OnInit {
  dossierId: any;
  dossierDetails: any;
  piece: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: AdminService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.dossierId = data.id;
      this.getossierDetails();
    });
  }

  getossierDetails() {
    this.service.getOneDossierDetails(this.dossierId).subscribe((result) => {
      this.dossierDetails = result;
      this.piece = JSON.parse(this.dossierDetails.pieces);
      console.log(this.dossierDetails);
    });
  }

  capturePDF() {
    var data = document.getElementById("content");
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jspdf({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      let contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });
  }
}
