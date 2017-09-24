import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';


/**
 * Generated class for the CivicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-civica',
  templateUrl: 'civica.html',
})
export class CivicaPage {

  usuario

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider:UsuarioProvider) {
    this.usuario = this.usuarioProvider.usuario;
  }


 

}
