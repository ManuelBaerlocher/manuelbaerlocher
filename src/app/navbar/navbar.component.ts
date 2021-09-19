import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  transformPercent = '100%';
  constructor(){
    
  }

  ngOnInit(){
  }

  openRespMenu(){
    
    console.log(this.transformPercent) 
    
    this.transformPercent = '0%'
    console.log(this.transformPercent)

  
  }
}
