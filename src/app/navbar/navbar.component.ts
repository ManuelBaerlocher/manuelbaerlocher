import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  transformPercent = '100%';
  overlayShow = 'd-none';
  constructor(){
    
  }

  ngOnInit(){
  }

  openRespMenu(){
    
    console.log(this.transformPercent) 
    this.overlayShow = '';
    this.transformPercent = '0%'
    console.log(this.transformPercent)

  
  }

 closeRespMenu(){
    
    console.log(this.transformPercent) 
    this.overlayShow = 'd-none';
    this.transformPercent = '100%'
    console.log(this.transformPercent)

  
  }
}
