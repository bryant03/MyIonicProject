import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class Alert {
  constructor(public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}