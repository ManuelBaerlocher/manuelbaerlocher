import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transformPercent = '100%';
  constructor() { }

  ngOnInit(): void {
  }

  closeRespMenu(){
    /*document.getElementById('responsiveMenu').style = 'transform: translateX(0%);';*/
    console.log(this.transformPercent)
    console.log('es geht')
    this.transformPercent = '100%'
    console.log(this.transformPercent)
  
  }

}
