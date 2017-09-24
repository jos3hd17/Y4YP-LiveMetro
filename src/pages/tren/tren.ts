import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tren',
  templateUrl: 'tren.html',
})
export class TrenPage {
 tren: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.tren=  {
      id: "2",
      linea: "A",
      direccion: 1,
      ubicacion: {
        x: 10,
        y: 10
      },
      color: "verde",
      vagones: {
        v1: {
          color: this.colorVagon(200,190),
          capacidad_max: 200,
          capacidad_actual: 190,
          zonas_especiales: {
            z1: 1,
            z2: 0
          }
        },
        v2: {
          color: this.colorVagon(200,180),
          capacidad_max: 200,
          capacidad_actual: 180,
          zonas_especiales: {
            z1: 1,
            z2: 1
          }
        },
        v3: {
          color: this.colorVagon(200,120),
          capacidad_max: 200,
          capacidad_actual: 125,
          zonas_especiales: {
            z1: 1,
            z2: 1
          }
        },
        v4: {
          color: this.colorVagon(200,100),
          capacidad_max: 200,
          capacidad_actual: 100,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        },
        v5: {
          color: this.colorVagon(200,70),
          capacidad_max: 200,
          capacidad_actual: 70,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        },
        v6: {
          color: this.colorVagon(200,50),
          capacidad_max: 200,
          capacidad_actual: 50,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        }
      }
    }
  }

  colorVagon(capacidad_max, capacidad_actual){
    var porcent = capacidad_actual/capacidad_max ;
    var res ="";
    if (porcent < 0.3 ) {
      res = "verde";
    }
    else if(porcent > 0.3 && porcent < 0.8){
      res = "amarillo";
    }
    else   
      res = "rojo";
    
    return res;

    //this.navCtrl.parent.select(2);
  }
  


}
