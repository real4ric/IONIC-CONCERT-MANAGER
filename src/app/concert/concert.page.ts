import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {

  constructor(public itemInputForm: ConcertService, 
    private router: Router, 
    private toastCtrl: ToastController) { }

  ngOnInit() {}

  public async validate (){
    if(!this.itemInputForm.valideInput()){
      const toast = await this.toastCtrl.create({
        message: 'Fill all the Blanks',
        color: 'danger',
        duration: 1000,
        position: 'middle',
      });
      toast.present();
      return;
    }
    this.itemInputForm.addConcert(this.itemInputForm.getConcertData());
    this.router.navigateByUrl('/home');
  }

}
