import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  faEye=faEye
  faHeart=faHeart
  faFilter=faFilter




  term!: string;


  
  inc =0;


  constructor(private apiService: ApiService) { }
  Items: any
  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }

  onSave(){
    this.inc++;
  }
 


}

