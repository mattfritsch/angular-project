import { Component, OnInit } from '@angular/core';
import {ComicService} from "../services/comic/comic.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {
  comic : any;

  constructor(
    private Comic: ComicService,
    private route: ActivatedRoute
  ) { }

  //on récupère l'id du comic, pour afficher les détails du comic sélectionné
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Comic.get(id).subscribe((value: any) => {
      console.log(value)
      this.comic = value
    })
  }

}
