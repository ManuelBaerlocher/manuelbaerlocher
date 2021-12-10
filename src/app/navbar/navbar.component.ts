import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  transformPercent = '100%';
  overlayShow = 'd-none';
  otherlanguage = '';
  divanzeigen = false;
  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    let setlanguage = window.navigator.language

    if (setlanguage == 'de-CH') {
      setlanguage = 'de';
      this.otherlanguage = 'EN';
    } else {
      setlanguage = 'en';
      this.otherlanguage = 'DE';
    }

    this.translate.setDefaultLang(setlanguage);
  }

  changeLanguage() {
    this.translate.use(this.otherlanguage.toLowerCase());

    if (this.otherlanguage == 'EN') {
      this.otherlanguage = 'DE';
    } else {
      this.otherlanguage = 'EN';
    }
  }

  openRespMenu() {

    console.log(this.transformPercent)
    this.overlayShow = '';
    this.divanzeigen = true;
    this.transformPercent = '0%'
    console.log(this.transformPercent)


  }

  closeRespMenu() {

    console.log(this.transformPercent)
    this.overlayShow = 'd-none';
    this.divanzeigen = false;
    this.transformPercent = '100%'
    console.log(this.transformPercent)


  }
}
