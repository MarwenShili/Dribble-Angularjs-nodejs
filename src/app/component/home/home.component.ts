import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {

$(document).ready(() =>{
  var typed = new Typed(".typing",{
    strings: [/*"Front-end developer",*/"Full Stack Web Developer","Designer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
    showCursor: true,

  })
  });
  }
 
 
}
/*


/*&(document).ready(function(){
  &(window).scroll(function(){
    if(this.scrollY > 20){

    }else{
      
    }
  })
});*/