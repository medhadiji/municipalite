import { Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.css"],
})
export class AdminLayoutComponent implements OnInit {
  @Output() switchDir = new EventEmitter<void>();
  @Input() color: string;
  constructor(private translate: TranslateService, private router: Router) {
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
