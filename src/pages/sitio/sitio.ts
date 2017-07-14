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

  Restaurants =[ 
    {
      Name: "Basílica",
      descripcion: "Description of Basílica",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      Name: "Al rojo",
      descripcion: "Description of Al rojo",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      Name: "Patria mía",
      descripcion: "Description of Patria mía",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      Name: "Ay Caramba",
      descripcion: "Description of Ay Caramba",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      Name: "Triada",
      descripcion: "Description of Triada",
      puntaje: 18,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    }

  ];
  
  Bar = [
    {
      Name: "Locodeluxe",
      descripcion: "Description of Locodeluxe",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
    {
      Name: "Ocatavia",
      descripcion: "Description of Ocatavia",
      puntaje: 10,
       image: "assets/img/modesta-zemgulyte-194520.jpg",
    },
  ];

  
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
      Name: "Babylon",
      descripcion: "Description of Babylon",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1062",
    },
    {
      Name: "Bendito Seas",
      descripcion: "Description of Bendito Seas",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1074",
    },
    {
      Name: "Sixtina",
      descripcion: "Description of Sixtina",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1024",
    }
  ];

  Xtreme_sports = [
    {
      Name: "Parapente",
      descripcion: "Description of Parapente",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1062",
    },
    {
      Name: "Paintball",
      descripcion: "Description of Paintball",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1074",
    },
    {
      Name: "Cuatrimoto",
      descripcion: "Description of Cuatrimoto",
      puntaje: 10,
      image: "https://unsplash.it/200/300?image=1024",
    }
  ];
  
  listas

    
  categoriaName
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.categoriaName = navParams.get('categoriaName');
  }

  ionViewDidLoad() {
   console.log(this.navParams.data);
   if(this.categoriaName == "Restaurants"){
      this.listas = this.Restaurants;
    }
    else
    if(this.categoriaName == "Bar"){
      this.listas = this.Bar;
    }
    else 
    if(this.categoriaName == "Disco"){
      this.listas = this.discotecas;
    }
    else 
    if(this.categoriaName == "Xtreme sports"){
      this.listas = this.Xtreme_sports;
    }
  }

  public cargarDatos(categoriaName){
    if(categoriaName == "Restaurants"){
      this.listas = this.Restaurants;
    }
    else
    if(categoriaName == "Bar"){
      this.listas = this.Bar;
    }
    else 
    if(categoriaName == "Disco"){
      this.listas = this.discotecas;
    }
    else 
    if(categoriaName == "Xtreme sports"){
      this.listas = this.Xtreme_sports;
    }
  }



}
