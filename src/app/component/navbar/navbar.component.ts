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
  public searchkeyword =""
  public url =`https://api.unsplash.com/search/photos?page=1&query=office>; rel="first"`
  faBars=faBars

  constructor() { }

  
  ngOnInit(): void {
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active"); 
      $('.menu-btn i').toggleClass("active"); 

    });

  }
 
  
}
$("#myForm").submit(function(event){
  event.preventDefault()

  var search = $("#search").val()
  var Url = "https://api.unsplash.com/search/photos?query="+search+"&client_id=CKNfNyHWncQMxlilt0R0xvNNwgmQ5js3mVdBzHgNdrM"

  $.ajax({
    method: 'GET', 
    url:Url,
    success:function(data){
      console.log(data)
    }
  })
})