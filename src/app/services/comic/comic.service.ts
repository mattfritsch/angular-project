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

  getAllComics() : any{
    return this.comicsRef.snapshotChanges().pipe(
      map((changes:any) =>{
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
    })
    )
  }

  saveNewComic(comic: Comics): any{
    return new Observable(obs=>{
      this.comicsRef.add({...comic}).then(() =>{
        obs.next();
      })
    })
  }

  get(id: any) : any{
    return new Observable(obs => {
      this.comicsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      })
    })
  }

  update(comic : Comics){
    return new Observable(obs => {
      this.comicsRef.doc(comic.id).update(comic);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`comics/${id}`).delete()
  }
  setRead(){
    for (const comic of this.comics){
      comic.read = true;
    }
  }

  setUnread(){
    for(const comic of this.comics){
      comic.read = false;
      console.log(comic)
    }
  }

  switchOnRead(index: any){
    this.comics[index].read = !this.comics[index].read
  }

  getComicById(id : number){
    let tmp;
    for(const comic of this.comics){
      if(comic.id === id){
        tmp = comic;
      }
    }
    return tmp;
  }

}
