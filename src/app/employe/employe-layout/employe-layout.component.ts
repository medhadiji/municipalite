import { Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-employe-layout",
  templateUrl: "./employe-layout.component.html",
  styleUrls: ["./employe-layout.component.css"],
})
export class EmployeLayoutComponent implements OnInit {
  @Output() switchDir = new EventEmitter<void>();
  @Input() color: string;
  constructor(private translate: TranslateService, public router: Router) {
    const lng = localStorage.getItem("language");
    if (!lng || lng === null) {
      localStorage.setItem("language", "fr");
    }
    this.translate.use(localStorage.getItem("language"));
  }
  showSideNav = true;
  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
    this.showSideNav = true;
  }
  switchLang(lng) {
    if (!lng || lng !== null) {
      localStorage.setItem("language", lng);
    }
    this.translate.use(lng);
    this.onClickswitchDir();
  }
  onClickswitchDir() {
    this.switchDir.emit();
  }
}
