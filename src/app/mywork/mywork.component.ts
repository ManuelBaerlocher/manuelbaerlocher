import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],

  
})
export class MyworkComponent implements OnInit {
  
  
  
  myworks = [
    {
      'title': "work.elpollolocotitle",
      'text': "work.elpollolocotext",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg",
      'link': "https://www.google.ch/"
    },
    {
      'title': "work.mypagetitle",
      'text': "work.mypagetext",
      'class': "Angular",
      'image': "../../assets/img/laptop.jpg",
      'link': ""

    },
    {
      'title': "Join",
      'text': "Kanban Board",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg",
      'link': "https://www.google.ch/"
    },
    {
      'title': "eat.ch",
      'text': "work.eat.chtext",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg",
      'link': "https://www.google.ch/"
    },
  ]

  mySelectWorks = [] as any;
  selectionAll = true;
  selectionAngular = false;
  selectionJavascript = false;
  

  constructor() {

  }
  ngOnInit() {
    this.selectAll()
    
  }

 



  selectAll() {
    this.selectionAll = true;
    this.selectionAngular = false;
    this.selectionJavascript = false;

    this.mySelectWorks = [];

    for (let i = 0; i < this.myworks.length; i++) {


      let title = this.myworks[i].title;
      let text = this.myworks[i].text;
      let image = this.myworks[i].image;
      let link = this.myworks[i].link;
      let selectmyWork = {
        'title': title,
        'text': text,
        'image': image,
        'link': link
      }
      this.mySelectWorks.push(selectmyWork)

    }
  }

  selectAngular() {
    this.selectionAll = false;
    this.selectionAngular = true;
    this.selectionJavascript = false;

    this.setMySelectWorks('Angular');
  }

  selectJavascript() {
    this.selectionAll = false;
    this.selectionAngular = false;
    this.selectionJavascript = true;

    this.setMySelectWorks('Javascript');
  }

  setMySelectWorks(input?: string) {
    this.mySelectWorks = [];

    for (let i = 0; i < this.myworks.length; i++) {
      let selectClass = this.myworks[i].class;
      if (selectClass == input) {

        let title = this.myworks[i].title;
        let text = this.myworks[i].text;
        let image = this.myworks[i].image;
        let newWork = {

          'title': title,
          'text': text,
          'image': image
        }

        this.mySelectWorks.push(newWork)
      }
    }
  }
}
function darkMode(darkMode: any): any {
  throw new Error('Function not implemented.');
}

