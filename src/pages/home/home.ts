import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProximosTrenesPage } from '../proximos-trenes/proximos-trenes';
declare var google;
declare var map;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ubi: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCrtl: ViewController) {
    let that = this;
    setTimeout(function(){
      that.googleMap();
    }, 2000)
    this.ubi = "6.244203, -75.581212";

  }
     
     estaciones =[
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
      ]
googleMap(){
    
  var str = this.ubi; 
  var splitted = str.split(",", 2); 
  var latitude= +splitted[0];
  var longitude= +splitted [1];

  console.log(splitted)




     var place ={lat: latitude, lng: longitude};
     var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          zoom: 12,
          center: place
        });
     
        for (var i=0; i< this.estaciones.length;i++){
          var places = {lat: this.estaciones[i].latitude, lng: this.estaciones[i].longitude};
          var marker = new google.maps.Marker({ 
          position: places,
          map: map,
          label: this.estaciones[i].nombre,
          icon: "../assets/station.png"
        });
        }
   var stations = [];
      stations.push(new google.maps.LatLng(6.337804,-75.544299)); //Niquia
      stations.push(new google.maps.LatLng(6.330673, -75.553296));  //Bello
      stations.push(new google.maps.LatLng(6.315869, -75.555376)); //Madera
      stations.push(new google.maps.LatLng(6.300145,-75.558536)); //Acevedo
      stations.push(new google.maps.LatLng(6.290361,-75.564716)); //Tricentenario
      stations.push(new google.maps.LatLng(6.278235,-75.569479)); // Caribe
      stations.push(new google.maps.LatLng(6.274641,-75.569876)); //Intermedio Caribe
      stations.push(new google.maps.LatLng(6.270716,-75.569190)); //Intermedio caribe-universidad
      stations.push(new google.maps.LatLng(6.269350,-75.565791)); //Universidad 
      stations.push(new google.maps.LatLng(6.268007,-75.563310)); //Intermedio Universidad 
      stations.push(new google.maps.LatLng(6.265533,-75.562752)); //Intermedio universidad-hospital 
      stations.push(new google.maps.LatLng(6.263982,-75.563527)); //Hospital 
      stations.push(new google.maps.LatLng(6.256863,-75.566250)); //Prado 
      stations.push(new google.maps.LatLng(6.250174,-75.568289)); //Parque Berrio 
      stations.push(new google.maps.LatLng(6.247133,-75.569827)); //San Antonio 
      stations.push(new google.maps.LatLng(6.242967,-75.571496)); //Alpujarra 
      stations.push(new google.maps.LatLng(6.238397,-75.573235)); //Exposiciones 
      stations.push(new google.maps.LatLng(6.230622,-75.575552)); //Industriales 
      stations.push(new google.maps.LatLng(6.212746,-75.578084)); //Poblado  
      stations.push(new google.maps.LatLng(6.193846,-75.581946)); //Aguacatala 
      stations.push(new google.maps.LatLng(6.188955,-75.583180)); //Intermedio aguacatala - Ayura 
      stations.push(new google.maps.LatLng(6.186102,-75.586216)); //Ayura 
      stations.push(new google.maps.LatLng(6.174646,-75.597095)); //Envigado 
      stations.push(new google.maps.LatLng(6.163212,-75.605915)); //Itagui 
      stations.push(new google.maps.LatLng(6.157366,-75.616708)); //Sabaneta 
      stations.push(new google.maps.LatLng(6.152694,-75.626493)); //La estrella
      
      
      

      var polyLineOptions ={path : stations, strokeColor: "#070707",strokeOpacity: 0.9, strokeWeight:5};
      var polyLine = new google.maps.Polyline(polyLineOptions);
      polyLine.setMap(map);

      var metroplus = [];
      metroplus.push(new google.maps.LatLng(6.230835, -75.609283));//Udem
      metroplus.push(new google.maps.LatLng(6.231070, -75.605121));//Los alpes
      metroplus.push(new google.maps.LatLng(6.231139, -75.601028));//La palma
      metroplus.push(new google.maps.LatLng(6.231390, -75.596752));//Belen
      metroplus.push(new google.maps.LatLng(6.231566, -75.590943));//Rosales
      metroplus.push(new google.maps.LatLng(6.231656, -75.586587));//Fatima
      metroplus.push(new google.maps.LatLng(6.231832, -75.582091));//Nutibara
      metroplus.push(new google.maps.LatLng(6.230462, -75.576732));//Industriales 2
            
<<<<<<< HEAD
      
      
  }

  ir(){
    var x1=new google.maps.LatLng(6.242967,-75.571496);//exposiciones
    var x2=new google.maps.LatLng(6.230622,-75.575552);//industriales
    var distancia = google.maps.geometry.spherical.computeDistanceBetween(x1, x2);
    console.log("distancia entre exposiciones e industriales"+ distancia);

    var x1=new google.maps.LatLng(6.242967,-75.571496);//exposiciones
    var x2=new google.maps.LatLng(6.212746,-75.578084);//poblado
    var distancia = google.maps.geometry.spherical.computeDistanceBetween(x1, x2);
    console.log("distancia entre exposiciones y poblado"+ distancia);

    
    
    var x1=new google.maps.LatLng(6.242967,-75.571496);//exposiciones
    var x2=new google.maps.LatLng(6.222377, -75.576823);//poblado
    var distancia = google.maps.geometry.spherical.computeDistanceBetween(x1, x2);
    console.log("distancia entre exposiciones y proximo tren "+ distancia);
=======
        var polyLineOptions2 ={path : metroplus, strokeColor: "#070707",strokeOpacity: 0.9, strokeWeight:5};
      var polyLine2 = new google.maps.Polyline(polyLineOptions2);
      polyLine2.setMap(map);

>>>>>>> a63b05335db1a2b40bf20dd5ade775c6be4b4f77

  }
}
