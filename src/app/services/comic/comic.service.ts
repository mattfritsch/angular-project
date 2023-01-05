import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { Comics} from "../../models/comics.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private dbPath = '/comics';
  comicsRef: AngularFirestoreCollection<Comics>;
  private comics? : any;
  comicsSubject = new Subject<any[]>();

  constructor(
    private db: AngularFirestore
  ) {
    this.comicsRef = db.collection(this.dbPath)
  }

  //fonction pour récupérer tous les comics présent dans la base de données
  getAllComics() : any{
    return this.comicsRef.snapshotChanges().pipe(
      map((changes:any) =>{
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
    })
    )
  }

  //fonction pour ajouter un comic dans la base de données

  saveNewComic(comic: Comics): any{
    return new Observable(obs=>{
      this.comicsRef.add({...comic}).then(() =>{
        obs.next();
      })
    })
  }

  //fonction pour récupérer un comic en particulier en fonction de son id
  get(id: any) : any{
    return new Observable(obs => {
      this.comicsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      })
    })
  }

  //fonction pour modifier les informations d'un comic

  update(comic : Comics){
    return new Observable(obs => {
      this.comicsRef.doc(comic.id).update(comic);
      obs.next();
    })
  }

  //fonction pour supprimer un comic

  delete(id: any){
    this.db.doc(`comics/${id}`).delete()
  }

}
