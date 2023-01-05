import { Component, OnInit } from '@angular/core';
import {Comics} from "../models/comics.model";
import {ComicService} from "../services/comic/comic.service";

@Component({
  selector: 'app-comic-new',
  templateUrl: './comic-new.component.html',
  styleUrls: ['./comic-new.component.scss']
})
export class ComicNewComponent implements OnInit {

  public comic! : Comics;
  constructor(
    private Comic: ComicService
  ) { }

  ngOnInit(): void {
    this.comic = new Comics();
  }

  //fonction pour ajouter un comic dans la base de données
  add(){
    this.Comic.saveNewComic(this.comic).subscribe(() => {
      this.comic = new Comics()
    })
  }

}
