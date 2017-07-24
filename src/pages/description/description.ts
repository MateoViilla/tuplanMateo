import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, ModalController } from 'ionic-angular';
import { UsuarioApi } from '../../shared/sdk/services';
import { PhotoViewer } from '@ionic-native/photo-viewer';

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
      DescriptionTittle:"Paquetes",
      DescriptionText:"1, Garrafa + Kit de cumpleaños + aguas + cervezas, 450.000"
    },
    {
      Icon:"beer",
      Text:"Rumba crossover",
      DescriptionTittle:"Musica",
      DescriptionText:"Salsa, bachata, merengue, vallenato, musica urbana y electronica"
    },
    {
      Icon:"pint",
      Text:"Barra libre",
      DescriptionTittle:"Descripcion",
      DescriptionText:"Barra libre para las mujeres de 10 a 12 los jueves y domingos"
    },
    {
      Icon:"cart",
      Text:"Descuentos promotores",
      DescriptionTittle:"Descripcion",
      DescriptionText:"Los mejores descuentos para los promotores, hasta del 15% de descuento en todo lo que se pueda consumir dentro del sitio"
    },
    {
      Icon:"card",
      Text:"Cover",
      DescriptionTittle:"Precios y tarifas",
      DescriptionText:"Jueves, viernes y domingos, no cover para mujeres, los sabados el cover tiene un precio de $10.000 COP"
    }],
    MaxPrice: "$430.000",
    LowPrice: "$6.600",
    Color:"danger",
    Cover:"Si",
    PrecioCover:"10.000",
    TipoMoneda:"COP"
  }];

  @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController,private photoViewer: PhotoViewer,private usuarioApi:UsuarioApi, public navParams: NavParams,private toastCtrl: ToastController, public modalCtrl: ModalController) {

  
}
  
  ionViewDidLoad(){
  }

 slideChanged() {
    let currentIndex = this.slide.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  presentToast(titulo,mensaje) {
  let toast = this.toastCtrl.create({
    message: titulo +': \n'+ mensaje,
    duration: 3000,
    position: 'top',
    showCloseButton: true
  });
  toast.present();
  }

  /*bookingAction(){
    if (usuario =! ""){

    } else {

    }

  } */
  openModal(){
    const myModal = this.modalCtrl.create('ModalPage');
    myModal.present();
  }
  openModalNoAuth(){
    const myModal = this.modalCtrl.create('ModalNoAuthPage');
    myModal.present();
  }

  openPhoto(url){
       this.photoViewer.show(url);

  }
}
