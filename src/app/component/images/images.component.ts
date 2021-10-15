import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
successmessage:any
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
  }
  addimage(f:any){
       let data = f.value
       this.fs.collection("images").doc().set({
        image:data.image,
        name:data.name,
        nblike:data.nblike
       }).then(()=>{
        this.successmessage='Added'
       })
  }
}
