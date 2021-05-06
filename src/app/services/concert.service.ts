import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const STORAGE_KEY = "concert";

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  name= "test"

  private concertTab = [];

  public input = {
    salle: null,
    ville: null,
    groupe: null,
    date: null,
    note: null,
    genre: null,
    commentaire: null,
  }

  constructor() { }

  public async getConcert(){
    const data:any = await Storage.get({key: STORAGE_KEY});
    this.concertTab = JSON.parse(data.value) || [];
    return this.concertTab;
  }

  public getConcertData(){
    return {
      salle : this.input.salle,
      ville : this.input.ville,
      groupe : this.input.groupe,
      date : this.input.date,
      note : this.input.note,
      genre : this.input.genre,
      commentaire : this.input.commentaire,
      
    }
  }
  public async addConcert(data){
    this.concertTab.push(data);
    this.input.salle = null;
    this.input.ville = null;
    this.input.groupe = null;
    this.input.date = null;
    this.input.note = null;
    this.input.genre = null;
    this.input.commentaire = null;
    this.persist();
  }

  


  private async persist(){
    await Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.concertTab)
    });
  }
  public valideInput(){
    return this.input.salle && this.input.ville && this.input.groupe && this.input.date && this.input.note && this.input.genre && this.input.commentaire
  }

  public deleteConcert(pos){
    this.concertTab.splice(pos,1);
    this.persist();
  }
}
