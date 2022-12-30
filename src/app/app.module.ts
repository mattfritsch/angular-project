import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { FormsModule } from "@angular/forms";
import { ComicService} from "./services/comic/comic.service";
import { HomeComponent } from './home/home.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicModifComponent } from './comic-modif/comic-modif.component';
import { ComicNewComponent } from './comic-new/comic-new.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    HomeComponent,
    ComicListComponent,
    ComicModifComponent,
    ComicNewComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
