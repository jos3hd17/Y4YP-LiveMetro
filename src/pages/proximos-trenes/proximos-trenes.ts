import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrenesProvider } from './../../providers/trenes/trenes';

/**
 * Generated class for the ProximosTrenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proximos-trenes',
  templateUrl: 'proximos-trenes.html',
})
export class ProximosTrenesPage {

  proximos_trenes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public trenesProvider: TrenesProvider) {
    this.proximos_trenes = this.trenesProvider.getDistance(6.337804,-75.544299, 6.330673, -75.553296,"spherical");    
  }

  

  

}
