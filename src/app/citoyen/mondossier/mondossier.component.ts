import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mondossier',
  templateUrl: './mondossier.component.html',
  styleUrls: ['./mondossier.component.css']
})
export class MondossierComponent implements OnInit {

  @Output() switchDir = new EventEmitter<void>();
  @Input() color:string;
  constructor(private translate: TranslateService){
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

}
