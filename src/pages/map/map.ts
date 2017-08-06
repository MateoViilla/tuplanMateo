import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
declare var google;
declare var map;


/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  ubi: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCrtl: ViewController) {
    let that = this;
    setTimeout(function(){
      that.googleMap();
    }, 2000)
    this.ubi = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  closeModal(){
    this.viewCrtl.dismiss();
  }
 
  googleMap(){
    console.log(this.ubi.ubicacion);
  var str = this.ubi.ubicacion; 
  var splitted = str.split(",", 2); 
  var latitude= +splitted[0];
  var longitude= +splitted [1];

  console.log(splitted)


     var place ={lat: latitude, lng: longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: place
        });
        var marker = new google.maps.Marker({
          position: place,
          map: map

        });
  }

}
