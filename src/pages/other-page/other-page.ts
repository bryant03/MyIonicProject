import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
	templateUrl: 'other-page.html'
})
export class OtherPage {
	constructor(public navCtrl: NavController) {}
	goBack(){
		this.navCtrl.pop();
	}
}