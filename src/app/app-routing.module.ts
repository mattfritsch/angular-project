import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicListComponent} from "./comic-list/comic-list.component";
import {ComicNewComponent} from "./comic-new/comic-new.component";
import {HomeComponent} from "./home/home.component";
import {ComicModifComponent} from "./comic-modif/comic-modif.component";
import {ComicDetailsComponent} from "./comic-details/comic-details.component";

//toutes les routes, des différentes pages disponibles sur ce site
const routes: Routes = [
  {
    path : 'comics',
    component : ComicListComponent
  },
  {
    path : 'new',
    component : ComicNewComponent
  },
  {
    path: 'modif/:id',
    component : ComicModifComponent
  },
  {
    path: 'details/:id',
    component : ComicDetailsComponent
  },
  {
    path : '',
    component : HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
