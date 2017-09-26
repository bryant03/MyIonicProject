import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OtherPage } from '../other-page/other-page';

@Component({
  templateUrl: 'input-floating-labels.html'
})
export class InputFloatingLabels { 
	constructor(public navCtrl: NavController){}
	GoToOtherPage(){
		this.navCtrl.push(OtherPage);
	}
}