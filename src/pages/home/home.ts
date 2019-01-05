import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  segment = 'home';
  name = 'There';
  action = "add new";

  product = {
    id:       undefined,
    name:     undefined, 
    price:    undefined,
    currency: "OMR"
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController
  ) {
    this.show();
  }

  view(data) {
    this.modalCtrl.create('ModalPage', {
      details: data
    }).present();
  }

  editor() {
    
  }

  edit() {
    
  }

  clear() {
    
  }

  add() {
    
  }

  show() {
    
  }

  delete() {
    
  }

}
