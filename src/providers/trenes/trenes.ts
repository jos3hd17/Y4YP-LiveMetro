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
        x: 6.281982,
        y: -75.552858
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
    },
    {
      id: "3",
      linea: "A",
      direccion: 3,
      ubicacion: {
        x: 6.290366,
        y: -75.564716
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
      id: "4",
      linea: "A",
      direccion: 3,
      ubicacion: {
        x: 6.285841,
        y: -75.556653
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
  ]
estaciones = [
    {
          nombre: "Niquia",
          latitude: 6.337804,
          longitude:-75.544299
        },
        {
          nombre: "Bello",
          latitude: 6.330673,
          longitude: -75.553296
        },
        {
          nombre: "Madera",
          latitude: 6.315869,
          longitude: -75.555376
        },
        {
          nombre: "Acevedo",
          latitude: 6.300145,
          longitude: -75.558536
        },
        {
          nombre: "Tricentenario",
          latitude: 6.290361,
          longitude: -75.564716
        },
        {
          nombre: "Caribe",
          latitude: 6.278235,
          longitude: -75.569479
        },
        {
          nombre: "Universidad",
          latitude: 6.269350,
          longitude: -75.565791
        },
        {
          nombre: "Hospital",
          latitude: 6.263982,
          longitude: -75.563527
        },
        {
          nombre: "Prado",
          latitude: 6.256863,
          longitude: -75.566250
        },
        {
          nombre: "Parque Berrio",
          latitude: 6.250174,
          longitude: -75.568289
        },
        {
          nombre: "San Antonio",
          latitude: 6.247133,
          longitude: -75.569827
        },
        {
          nombre: "Alpujarra",
          latitude: 6.242967,
          longitude: -75.571496
        },
        {
          nombre: "Exposiciones",
          latitude: 6.238397,
          longitude: -75.573235
        },
        {
          nombre: "Industriales",
          latitude: 6.230622,
          longitude: -75.575552
        },
        {
          nombre: "Poblado",
          latitude: 6.212746,
          longitude: -75.578084
        },
        {
          nombre: "Aguacatala",
          latitude: 6.193846,
          longitude: -75.581946
        },
        {
          nombre: "Ayurá",
          latitude: 6.186102,
          longitude: -75.586216
        },
        {
          nombre: "Envigado",
          latitude: 6.174646,
          longitude: -75.597095
        },
        {
          nombre: "Itaguí",
          latitude: 6.163212,
          longitude: -75.605915
        },
        {
          nombre: "Sabaneta",
          latitude: 6.157366,
          longitude: -75.616708
        },
        {
          nombre: "La estrella",
          latitude: 6.152694,
          longitude: -75.626493
        },
        {
          nombre: "Udem",
          latitude: 6.230835, 
          longitude: -75.609283
        },
        {
          nombre: "Los Alpes",
          latitude: 6.231070,
          longitude:  -75.605121
        },
        {
          nombre: "La Palma",
          latitude: 6.152694,
          longitude: -75.626493
        },
        {
          nombre: "Belen",
          latitude: 6.231390,
          longitude:  -75.596752
        },
        {
          nombre: "Rosales",
          latitude:6.231566,
          longitude:  -75.590943
        },
        {
          nombre: "Fatima",
          latitude: 6.231656, 
          longitude:  -75.586587
        },
        {
          nombre: "Nutibara",
          latitude: 6.231832, 
          longitude: -75.582091
        },
        {
          nombre: "Industriales MP",
          latitude: 6.230462,  
          longitude: -75.576732
        },
        {
          nombre: "Aranjuez",
          latitude: 6.285844,  
          longitude: -75.555832
        },
        {
          nombre: "Berlin",
          latitude: 6.282986,  
          longitude: -75.552957
        },
        {
          nombre: "Las Esmeraldas",
          latitude: 6.278305,  
          longitude: -75.553263
        },
        {
          nombre: "Manrique",
          latitude: 6.273228,  
          longitude: -75.554078
        },
        {
          nombre: "Gardel",
          latitude:6.267709,  
          longitude: -75.555060
        },
        {
          nombre: "Palos verdes",
          latitude:6.262073,  
          longitude: -75.555886
        },
        {
          nombre: "Hospital B",
          latitude:6.263907,  
          longitude: -75.563155
        },
        {
          nombre: "UdeA",
          latitude:6.263875,  
          longitude: -75.567682
        },
        {
          nombre: "Chagualo",
          latitude:6.260799,  
          longitude:-75.569160
        },
        {
          nombre: "Minorista",
          latitude:6.256037,  
          longitude: -75.573197
        },
        {
          nombre: "Cisneros",
          latitude:6.250544,  
          longitude: -75.575134
        },
        {
          nombre: "Plaza Mayor",
          latitude:6.243647,  
          longitude:-75.575354
        }

]
trayecto = [
  {
	id:1,
	tiempos : [
    
	  50646,
	  50903,
		50912,
		50920,
		51014,
		51133,
    51251
  
]
  },
{
	id:4,
	tiempos : [
    
	  51046,
	  50903,
		50912,
		50920,
		51014,
		51133,
    52351
  
]
  }
]
  
  constructor(public http: Http) {
    
  }

  
  public obtenerEstaciones(){
    return this.estaciones;
  }
  public obtenerEstacionesById(id){
    for(let i = 0; this.estaciones.length;i++){
      if(id == this.estaciones[i].nombre){
        
        return this.estaciones[i];
        
      }
      
    }
    return {nombre:"",latitude:0,longitude:0};
  }
  

  public obtenerTrenes(){
    return this.trenes;
  }
  public obtenerTrenesById(id){
    for (let i=0; this.trenes.length;i++){
      if (id == this.trenes[i].id){
        console.log(this.trenes[i]);
        return this.trenes[i];
      } 
    }
    return {ubicacion: {x:0, y:0} };
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
