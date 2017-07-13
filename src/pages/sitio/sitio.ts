import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SitioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sitio',
  templateUrl: 'sitio.html',
})
export class SitioPage {
/*
  Restaurants =[ 
    {
      dicotecaName: "Basílica",
      descripcion: "Description of Basílica",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      dicotecaName: "Al rojo",
      descripcion: "Description of Al rojo",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      dicotecaName: "Patria mía",
      descripcion: "Description of Patria mía",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      dicotecaName: "Ay Caramba",
      descripcion: "Description of Ay Caramba",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      dicotecaName: "Triada",
      descripcion: "Description of Triada",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    }

  ];*/
  /*
  Bar = [
    {
      dicotecaName: "Locodeluxe",
      descripcion: "Description of Locodeluxe",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      dicotecaName: "Ocatavia",
      descripcion: "Description of Ocatavia",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
  ];

  */
  slides = [
    {
      image: "https://unsplash.it/200/300?image=892",
    },
    {
      image: "https://unsplash.it/200/300?image=882",
    },
    {
      image: "https://unsplash.it/200/300?image=837",
    }
];


  discotecas = [
    {
      discotecaName: "Babylon",
      descripcion: "Description of Babylon",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1062",
    },
    {
      discotecaName: "Bendito Seas",
      descripcion: "Description of Bendito Seas",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1074",
    },
    {
      discotecaName: "Sixtina",
      descripcion: "Description of Sixtina",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1024",
    }
  ];
  

    sector 
    title 
    name
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.sector = this.navParams.data;
  }

  ionViewDidLoad() {
   //console.log(this.navParams.get('title'));
  }

  mostrar(){
  }



}
