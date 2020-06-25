import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth = false;
  authSubscription: Subscription;
  @Output() switchDir = new EventEmitter<void>();
  @Input() color:string;
  constructor(/*  private authService: AuthService */    private translate: TranslateService, ) {

    const lng = localStorage.getItem('language');
    if (!lng || lng === null) {
      localStorage.setItem('language', 'fr');
    }
    this.translate.use(localStorage.getItem('language'));
  }

  ngOnInit() {
/*   this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    }); */
  }


  onLogout() {
  // this.authService.logout();
  }

  ngOnDestroy() {
   // this.authSubscription.unsubscribe();
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
