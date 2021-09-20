import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  myworks = [
    {
      'title': "EL Pollo Loco",
      'text': "JavaScript -based jump and run game.",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg"
    },
    {
      'title': "My Page",
      'text': "My Page build with Angular",
      'class': "Angular",
      'image': "../../assets/img/laptop.jpg"
    },
    {
      'title': "Join",
      'text': "Kanban Board",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg"
    },
    {
      'title': "eat.ch",
      'text': "Side to order and deliverey eat",
      'class': "Javascript",
      'image': "../../assets/img/laptop.jpg"
    },
  ]


  constructor() {

  }
  ngOnInit() {



  }



}
