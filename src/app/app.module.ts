import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { Content1Component } from './Component/content1/content1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './Component/header/header.component';
import { SectionComponent } from './Component/section/section.component';
import { Section1Component } from './Component/section1/section1.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './Component/api.service';

import {
  LazyLoadImageModule,
  
} from "ng-lazyload-image";
import { FormsModule } from '@angular/forms';

ApiService
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Content1Component,
    HeaderComponent,
    SectionComponent,
    Section1Component,
    GalleryComponent,
   
  ],
  imports: [ LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
