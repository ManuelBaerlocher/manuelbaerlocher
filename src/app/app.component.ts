import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;
  setlanguage = '';


  constructor(translate: TranslateService) {

    this.setlanguage = window.navigator.language;

    if (this.setlanguage == 'de-CH') {
      this.setlanguage = 'de';
    } else {
      this.setlanguage = 'en';
    }

    translate.setDefaultLang(this.setlanguage);
  }
}

