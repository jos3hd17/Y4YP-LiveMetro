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


  trenes =  [{
    "id": "1",
    "linea": "A",
    "direccion": 1,
    "ubicacion": {
      "x": 6,
      "y": 5
    },

    "color": "N/A",
    "vagones": {
      "v1": {
        "capacidad_max": 200,
        "capacidad_actual": 180,
        "zonas_especiales": {
          "z1": 1,
          "z2": 0
        }
      },
      "v2": {
        "capacidad_max": 200,
        "capacidad_actual": 180,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v3": {
        "capacidad_max": 200,
        "capacidad_actual": 185,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v4": {
        "capacidad_max": 200,
        "capacidad_actual": 180,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v5": {
        "capacidad_max": 200,
        "capacidad_actual": 180,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v6": {
        "capacidad_max": 200,
        "capacidad_actual": 150,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      }
    }
  },
  {
    "id": "2",
    "linea": "A",
    "direccion": 1,
    "ubicacion": {
      "x": 10,
      "y": 10
    },

    "color": "verde",
    "vagones": {
      "v1": {
        "capacidad_max": 200,
        "capacidad_actual": 120,
        "zonas_especiales": {
          "z1": 1,
          "z2": 0
        }
      },
      "v2": {
        "capacidad_max": 200,
        "capacidad_actual": 120,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v3": {
        "capacidad_max": 200,
        "capacidad_actual": 125,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v4": {
        "capacidad_max": 200,
        "capacidad_actual": 100,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v5": {
        "capacidad_max": 200,
        "capacidad_actual": 70,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v6": {
        "capacidad_max": 200,
        "capacidad_actual": 50,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      }
    }
  },
  {
    "id": "3",
    "linea": "A",
    "direccion": 2,
    "ubicacion": {
      "x": 10,
      "y": 10
    },

    "color": "verde",
    "vagones": {
      "v1": {
        "capacidad_max": 200,
        "capacidad_actual": 120,
        "zonas_especiales": {
          "z1": 1,
          "z2": 0
        }
      },
      "v2": {
        "capacidad_max": 200,
        "capacidad_actual": 120,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v3": {
        "capacidad_max": 200,
        "capacidad_actual": 125,
        "zonas_especiales": {
          "z1": 1,
          "z2": 1
        }
      },
      "v4": {
        "capacidad_max": 200,
        "capacidad_actual": 100,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v5": {
        "capacidad_max": 200,
        "capacidad_actual": 70,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      },
      "v6": {
        "capacidad_max": 200,
        "capacidad_actual": 50,
        "zonas_especiales": {
          "z1": 0,
          "z2": 0
        }
      }
    }
  }

];

  constructor(public http: Http) {
    
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
}
