import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TrenesProvider} from '../../providers/trenes/trenes';
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
  constructor(public TrenesProvider:TrenesProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.tren = TrenesProvider.obtenerTrenesById(this.navParams.get('id'));
    console.log(this.tren);
    /*
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
          porcent:this.porcentVagon(200,190),
          color: this.colorVagon(200,190),
          emoji: this.emojiVagon(200,190),
          capacidad_max: 200,
          capacidad_actual: 190,
          zonas_especiales: {
            z1: 1,
            z2: 0
          }
        },
        v2: {
          porcent:this.porcentVagon(200,180),          
          color: this.colorVagon(200,180),
          emoji: this.emojiVagon(200,180),
          capacidad_max: 200,
          capacidad_actual: 180,
          zonas_especiales: {
            z1: 1,
            z2: 1
          }
        },
        v3: {
          porcent:this.porcentVagon(200,120),          
          color: this.colorVagon(200,120),
          emoji: this.emojiVagon(200,120),
          capacidad_max: 200,
          capacidad_actual: 125,
          zonas_especiales: {
            z1: 1,
            z2: 1
          }
        },
        v4: {
          porcent:this.porcentVagon(200,100),          
          color: this.colorVagon(200,100),
          emoji: this.emojiVagon(200,100),
          capacidad_max: 200,
          capacidad_actual: 100,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        },
        v5: {
          porcent:this.porcentVagon(200,70),          
          color: this.colorVagon(200,70),
          emoji: this.emojiVagon(200,70),
          capacidad_max: 200,
          capacidad_actual: 70,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        },
        v6: {
          porcent:this.porcentVagon(200,50),          
          color: this.colorVagon(200,50),
          emoji: this.emojiVagon(200,50),
          capacidad_max: 200,
          capacidad_actual: 50,
          zonas_especiales: {
            z1: 0,
            z2: 0
          }
        }
      }
    }
    */
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
  porcentVagon(capacidad_max, capacidad_actual){
    var porcent = 0;
    return  porcent = (capacidad_actual/capacidad_max)*100 ;
  }
  
  emojiVagon(capacidad_max, capacidad_actual){
    var porcent = capacidad_actual/capacidad_max ;
    var res ="";
    if (porcent < 0.3 ) {
      res = "happy";
      
    }
    else if(porcent > 0.3 && porcent < 0.8){
      res = "logo-octocat";
    }
    else   
      res = "sad";
    
    return res; 
  }


}
