import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  faBars=faBars

  constructor() { }

  
  ngOnInit(): void {
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active"); 
      $('.menu-btn i').toggleClass("active"); 

    });

  }
 
  
}
