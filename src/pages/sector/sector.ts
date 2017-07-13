import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SitioPage } from '../sitio/sitio';

/**
 * Generated class for the SectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sector',
  templateUrl: 'sector.html',
})
export class SectorPage {
  slides = [
    {
      image: "assets/img/christian-gertenbach-192353.jpg",
    },
    {
      image: "assets/img/christian-gertenbach-192353.jpg",
    },
    {
      image: "assets/img/christian-gertenbach-192353.jpg",
    }
];

sectors = [
    {
      sectorName: "Envigado",
      image: "assets/img/christian-gertenbach-192353.jpg",
      
    },
    {
      sectorName: "Sabaneta",
      image: "assets/img/joseph-gonzalez-110827.jpg",
    },
    {
      sectorName: "Poblado",
      image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      sectorName: "Bello",
      image: "assets/img/christian-gertenbach-192353.jpg",
      
    }
  ];


  public categoriaName;
  public categoriaImage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoriaName = navParams.get('categoriaName');
    this.categoriaImage = navParams.get('categoriaImage');
    
  }

  ionViewDidLoad() {
    
    console.log("la categoria es:"+ this.categoriaName);
    
  }

  nav(sector){
    this.navCtrl.push(SitioPage, {'value':sector});
    //  console.log(sector.title);

  }
  

  mostrar(){   
    console.log(this.categoriaName);
  }

  
}
