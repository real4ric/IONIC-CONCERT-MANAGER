import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public itemInputForm: ConcertService, 
    private alertCtrl: AlertController,
    private router: Router) {}

  public concertList = [];

  public async ngOnInit(){
    this.concertList = await this.itemInputForm.getConcert();
  }

  public async deleteOneConcert(pos){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure Delete this item ?',
      message: 'Item will be Permanently Deleted',
      buttons:[
        { text: 'NON' },
        { 
          text: 'OUI', 
          handler: ()=> { this.itemInputForm.deleteConcert(pos)}
        }
      ]
    });
    alert.present();
    
  }

  public updateOneConcert(pos){
    this.itemInputForm.input = this.concertList[pos]
    this.router.navigateByUrl('/update');
  }


}
