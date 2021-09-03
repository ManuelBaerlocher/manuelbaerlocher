import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['picture0.jpg', 'picture1.jpg', 'picture2.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Graduated at TUM'
  ]
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImgae();
  }


  updateImgae() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 100);
    }, 8000);
  }
}

