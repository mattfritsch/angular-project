import { Component, OnInit } from '@angular/core';
import {ComicService} from "../services/comic/comic.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comic-modif',
  templateUrl: './comic-modif.component.html',
  styleUrls: ['./comic-modif.component.scss']
})
export class ComicModifComponent implements OnInit {
  comic : any;
  change:boolean = false;
  constructor(
    private Comic: ComicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Comic.get(id).subscribe((value: any) => {
      console.log(value)
      this.comic = value
    })
  }

  modif(){
    this.Comic.update(this.comic).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false
        document.location.href = '/comics';
      }, 3000)
    })
  }

}
