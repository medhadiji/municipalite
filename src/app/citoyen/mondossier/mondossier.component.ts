import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationExtras, Router } from '@angular/router';
import { CitoyenService } from '../citoyen.service';
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";

import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-mondossier',
  templateUrl: './mondossier.component.html',
  styleUrls: ['./mondossier.component.css']
})
export class MondossierComponent implements OnInit {



  dossierId: any;
  dossierDetails: any;
  piece: any = [];
  user : User;
  @Output() switchDir = new EventEmitter<void>();
  @Input() color:string;
  constructor(
    private translate: TranslateService,public router: Router, public service: CitoyenService){
    const lng = localStorage.getItem('language');
    if (!lng || lng === null) {
      localStorage.setItem('language', 'fr');
    }
    this.translate.use(localStorage.getItem('language'));

  }
  showSideNav=true;

  logout() {

  }

  ngOnInit() {
    this.showSideNav=true;
   this.service.getUserById(localStorage.getItem('uid'))
   .subscribe((result) => {
     console.log(result);
     let res: any = result;
     console.log(res.idDossier);
     this.dossierId = res.idDossier;
     this.getossierDetails();
   })


  }

  switchLang(lng){
    if (!lng || lng !== null) {
      localStorage.setItem('language', lng);
    }
    this.translate.use(lng);
    this.onClickswitchDir();
  }
  onClickswitchDir() {
    this.switchDir.emit();
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
