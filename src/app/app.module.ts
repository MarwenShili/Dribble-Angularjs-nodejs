import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './Component/header/header.component';
import { SectionComponent } from './Component/section/section.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './Component/api.service';

import {LazyLoadImageModule} from "ng-lazyload-image";
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FileUploadComponent } from './Component/file-upload/file-upload.component';

import {AngularFireModule} from '@angular/fire/compat' ;
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {environment} from 'src/environments/environment';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ImagesComponent } from './Component/images/images.component';


ApiService
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionComponent,
    GalleryComponent,
    FileUploadComponent,
    RegisterComponent,
    LoginComponent,
    ImagesComponent,
   
  ],
  imports: [ LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
