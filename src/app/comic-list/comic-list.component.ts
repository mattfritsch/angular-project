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

  ngOnInit() : void{
    this.Comic.getAllComics().subscribe((data:any) =>{
      this.comics = data;
    })
  }

  readAll(){
    this.Comic.setRead();
  }

  unreadAll(){
    this.Comic.setUnread();
  }

}
