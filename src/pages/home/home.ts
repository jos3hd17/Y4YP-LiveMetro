import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
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
googleMap(){
    
  var str = this.ubi; 
  var splitted = str.split(",", 2); 
  var latitude= +splitted[0];
  var longitude= +splitted [1];

  console.log(splitted)


     var place ={lat: latitude, lng: longitude};
     var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          zoom: 10,
          center: place
        });
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          label: this.ubi.nombre
        });
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
      

      var polyLineOptions ={path : stations};
      var polyLine = new google.maps.Polyline(polyLineOptions);
      polyLine.setMap(map);
            
  }
}
