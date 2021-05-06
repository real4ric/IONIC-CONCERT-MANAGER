import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public formConcert: ConcertService, 
    private alertCtrl: AlertController) {}

  public concertTab = [];

  public async ngOnInit(){
    this.concertTab = await this.formConcert.getConcert();
  }

  public async deleteOneConcert(pos){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure Delete this item ?',
      message: 'Item will be Permanently Deleted',
      buttons:[
        { text: 'NON' },
        { 
          text: 'OUI', 
          handler: ()=> { this.formConcert.deleteConcert(pos)}
        }
      ]
    });
    alert.present();
    
  }

  


}
