import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;
  setlanguage = '';


  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    console.log(translate);
    
  }




  ngOnInit([otherlanguage]) {

    

    this.setlanguage = window.navigator.language;

    if (this.setlanguage == 'de-CH') {
      this.setlanguage = 'de';
      this.otherlanguage = 'EN';
    } else {
      this.setlanguage = 'en';
      this.otherlanguage = 'DE';


    }

    console.log(this.otherlanguage, this.setlanguage)

    this.translate.setDefaultLang(this.setlanguage);



  }
}

