import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the DescriptionPage.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
slides = [
    {
      image: "http://elcuervoeventos.com/wp-content/uploads/2016/11/La-Sagrada-Tienda.png",
    },
    {
      image: "assets/img/christian-gertenbach-192353.jpg",
    },
    {
      image: "assets/img/christian-gertenbach-192353.jpg",
    }
];

configuration = [
  {
    Image: "http://elcuervoeventos.com/wp-content/uploads/2016/11/La-Sagrada-Tienda.png",
    Tittle: "La sagrada tienda",
    Description: "Medellin, Parque lleras",
    Logo: "http://www.farrasnorte.com/clientes_base/min_486.jpg",
    Name: "La sagrada tienda",
    Services:[ {
      Icon:"attach",
      Text:"Regalos para cumpleaños",
      DescriptionTittle:"",
      DescriptionText:""
    },
    {
      Icon:"beer",
      Text:"Rumba crossover",
      DescriptionTittle:"",
      DescriptionText:""
    },
    {
      Icon:"pint",
      Text:"Barra libre",
      DescriptionTittle:"",
      DescriptionText:""
    },
    {
      Icon:"cart",
      Text:"Descuentos promotores",
      DescriptionTittle:"",
      DescriptionText:"Los mejores descuentos para los promotores"
    }],
    MaxPrice: "$430.000",
    LowPrice: "$6.600",
    Color:"danger",
    Cover:"Si",
    PrecioCover:"10.000",
    TipoMoneda:"COP"
  }];

  @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }
  
  ionViewDidLoad(){
  }

 slideChanged() {
    let currentIndex = this.slide.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  presentToast(mensaje) {
  let toast = this.toastCtrl.create({
    message:"Hola putas",
    duration: 3000,
    position: 'center'
  });
  toast.present();
  }
}
