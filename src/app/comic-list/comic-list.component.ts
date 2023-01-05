import { Component, OnInit } from '@angular/core';
import {ComicService} from "../services/comic/comic.service";

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  comics!:any;

  constructor(
    private Comic : ComicService
  ) {}

  //on récupère tous les comics présent dans la base de données pour les afficher sur la page Liste
  ngOnInit() : void{
    this.Comic.getAllComics().subscribe((data:any) =>{
      this.comics = data;
    })
  }

}
