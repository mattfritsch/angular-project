import {Component, Input, OnInit} from '@angular/core';
import { ComicService } from "../services/comic/comic.service";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  @Input() id? : string;
  @Input() name? : string;
  @Input() number? : string;
  @Input() description? : string;
  @Input() author? : string;
  @Input() designer? : string;
  @Input() cover? : string;
  @Input() isRead? : boolean;
  @Input() typeOfList? : string;
  @Input() universe? : string;
  @Input() seriesNumber? : string;
  @Input() isSerie? : boolean;
  @Input() releaseDate? : string;
  constructor(
    private Comic : ComicService
  ) { }

  ngOnInit(): void {
  }

  getRead(){
    return this.isRead ? "lu" : "pas lu";
  }

  moreInformation(){
    console.log("ouverture de la card")
  }

  onSwitch(){
    this.Comic.switchOnRead(this.id);
  }

  supr(){
    this.Comic.delete(this.id)
  }

}
