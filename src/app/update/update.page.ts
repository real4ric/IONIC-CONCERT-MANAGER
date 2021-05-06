import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  constructor(public itemInputForm: ConcertService, 
    private router: Router, 
    ) { }

  ngOnInit() {
  }
  public updateOneConcert (){
    this.itemInputForm.updateConcert();
    this.router.navigateByUrl('/home');
  }

}