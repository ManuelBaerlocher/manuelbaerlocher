import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  transformPercent = '100%';
  overlayShow = 'd-none';
  @Input() otherlanguage = '';
  
  divanzeigen = false;

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {

    
  }

  changeLanguage() {

    if (this.translate.currentLang == 'en') {
      this.otherlanguage = 'DE';

    } else {
      this.otherlanguage = 'EN';

    }

    this.translate.use(this.otherlanguage.toLowerCase());
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
