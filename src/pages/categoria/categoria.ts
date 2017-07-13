import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { SectorPage } from '../sector/sector';



/**
 * Generated class for the CategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  slides = [
    {
      image: "assets/img/Slider1.jpg",
    },
    {
      image: "assets/img/Slider2.jpg",
    },
    {
      image: "assets/img/Slider3.jpg",
    }
];

categorias  = [
    {
      categoriaName: "Restaurants",
      CategoriaImage: "https://unsplash.it/2000/608?image=1080",
      listing: "41",
    },
    {
      categoriaName: "Bar",
      CategoriaImage: "https://unsplash.it/2000/608?image=766",
      listing: "23",
    },
    /*
    {
      categoriaName: "Fondas",
      CategoriaImage: "https://unsplash.it/2000/608?image=395",
      listing: "20",
    },*/
    {
      categoriaName: "Disco",
      CategoriaImage: "https://unsplash.it/2000/608?image=274",
      listing: "40",
    },
    {
      categoriaName: "Xtreme sports",
      CategoriaImage: "https://unsplash.it/2000/608?image=773",
      listing: "10",
    }
];
  
   @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  

  slideChanged() {
    let currentIndex = this.slide.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  toSectorPage(categoria) {

   // console.log(categoria.categoriaName);
    this.navCtrl.push(SectorPage, {
      categoriaName: categoria.categoriaName,
      CategoriaImage: categoria.CategoriaImage
    })
  }

  clicado(){
    
  }

}
