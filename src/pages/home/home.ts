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
          zoom: 18,
          center: place
        });
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          label: this.ubi.nombre
        });
   /*var destinations = [];
      destinations.push(new google.maps.LatLng(6.337804,-75.544299)); //Niquia
      destinations.push(new google.maps.LatLng(6.330673, -75.553296));  //Bello
      destinations.push(new google.maps.LatLng(6.315869, -75.555376)); //Madera
      destinations.push(new google.maps.LatLng(6.300145,-75.558536)); //Acevedo
               
      var polyLineOptions ={path : destinations};
      var polyLine = new google.maps.PolyLine(polyLineOptions);
      polyLine.setmap(map);
              */  
  }
}
