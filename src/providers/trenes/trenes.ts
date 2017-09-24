import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TrenesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare var google;
declare var map;
@Injectable()
export class TrenesProvider {

  trenes =[
     {
      id: "1",
      linea: "A",
      direccion: 3,
      ubicacion: {
        x: 6.334577,
        y: -75.548287
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
    },
    {
      id: "2",
      linea: "A",
      direccion: 2,
      ubicacion: {
        x: 6.274063,
        y: -75.570607
      },
      color: "verde",
      vagones: {
        v1: {
          porcent:this.porcentVagon(200,130),
          color: this.colorVagon(200,130),
          emoji: this.emojiVagon(200,130),
          capacidad_max: 200,
          capacidad_actual: 130,
          zonas_especiales: {
            z1: 1,
            z2: 0
          }
        },
        v2: {
          porcent:this.porcentVagon(200,100),          
          color: this.colorVagon(200,100),
          emoji: this.emojiVagon(200,100),
          capacidad_max: 200,
          capacidad_actual: 100,
          zonas_especiales: {
            z1: 1,
            z2: 1
          }
        },
        v3: {
          porcent:this.porcentVagon(200,95),          
          color: this.colorVagon(200,95),
          emoji: this.emojiVagon(200,95),
          capacidad_max: 200,
          capacidad_actual: 95,
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
  ]
  constructor(public http: Http) {
    
  }

  public obtenerTrenes(){
    return this.trenes;
  }
  public obtenerTrenesById(id){
    for (let i=0; this.trenes.length;i++){
      if (id == this.trenes[i].id){
        return this.trenes[i];
      } 
    }
    return {};
  }

  obtenerProxTren(x, y){
    /*var trenesCercanos = {};
    
    for (var i = 0; i < this.trenes.length; i++) {
      
      var ubicacion = (this.trenes[i].ubicacion.x)^2 + (this.trenes[i].ubicacion.y)^2;
      if ((x^2+y^2)>) {
        
      }
      var element = array[i];
      
    }*/

    var x1=new google.maps.LatLng(50.995093,-16.417091);
    var x2=new google.maps.LatLng(50.997698,-16.41788);
    var distancia = google.maps.geometry.spherical.computeDistanceBetween(x1, x2);
  }


  degToRad(n)
  {
    return n * Math.PI / 180;
  }
  
  radToDeg(n)
  {
    return n * 180 / Math.PI;
  }
  
  public getDistance(lat1, lon1, lat2, lon2, mode)
  {	
    var R = 6371; // Earth radius in km
    
    switch(mode)
    {	
      case 'spherical':
      default:
        var dLon = this.degToRad(lon2 - lon1);
        lat1 = this.degToRad(lat1);
        lat2 = this.degToRad(lat2);
        var d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon)) * R;
      break;	
      
      case 'haversine':
        var dLat = this.degToRad(lat2 - lat1);
        var dLon = this.degToRad(lon2 - lon1);
        lat1 = this.degToRad(lat1);
        lat2 = this.degToRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        var d = R * c;
      break;	
      
      case 'rectangle':
        var x = this.degToRad(lon2 - lon1) * Math.cos(this.degToRad(lat1 + lat2) / 2);
        var y = this.degToRad(lat2 - lat1);
        var d = Math.sqrt(x * x + y * y) * R;
      break;	
    }
      
    return d;	
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
