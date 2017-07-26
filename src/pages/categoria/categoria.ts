import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { SectorPage } from '../sector/sector';
import { BtnMagicoPage } from '../boton-magico/btn_magico';
import { InicioPage } from '../inicio/inicio';

import { UsuarioApi } from '../../shared/sdk/services';



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
      categoriaName: "Restaurantes",
      CategoriaImage: "https://unsplash.it/2000/608?blur&image=1080",
      listing: "41",
    },
    {
      categoriaName: "Bares",
      CategoriaImage: "https://unsplash.it/2000/608?blur&image=766",
      listing: "23",
    },
    /*
    {
      categoriaName: "Fondas",
      CategoriaImage: "https://unsplash.it/2000/608?blur&image=395",
      listing: "20",
    },*/
    {
      categoriaName: "Discotecas",
      CategoriaImage: "https://unsplash.it/2000/608?blur&image=274",
      listing: "40",
    },
    {
      categoriaName: "Xtreme sports",
      CategoriaImage: "https://unsplash.it/2000/608?blur&image=773",
      listing: "10",
    }
];

  
   user

   myIcon: string = "";

   @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private usuarioApi:UsuarioApi) {
    if (!usuarioApi.isAuthenticated()) {
         
    }
  }

  ionViewDidLoad() {
    this.selectUserIcon();
    
  }


 
 

  toSectorPage(categoria) {

   // console.log(categoria.categoriaName);
    this.navCtrl.push(SectorPage, {
      categoriaName: categoria.categoriaName,
      userName: this.user
    })
  }

  

    showConfirm() {
        if (this.myIcon == "ios-contact") {
          let confirm = this.alertCtrl.create({
          title: 'Quieres cerrar sesión?',
          //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
          buttons: [
            {
              text: 'No',
              handler: () => {
              }
            },
            {
              text: 'Si',
              handler: () => {
                console.log('Sesión cerrada');
                this.showToast('bottom');
              }
            }
          ]
         });
        confirm.present();
        }

    else {
      let toast = this.toastCtrl.create({
      message: 'Anónimo ;)',
      duration: 2000,
      position: 'bottom'
    });
    toast.present(toast);
    }
     
  }

   showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: this.navParams.get('userName')+', Sesión cerrada con éxito',
      duration: 2000,
      position: position
    });
    toast.present(toast);
}

  public selectUserIcon(){
      if(!this.usuarioApi.isAuthenticated()){
      this.myIcon = "md-glasses";
      }
    else{
      this.myIcon = "ios-contact";
    }
  }

  toBtnMagico(){
    this.navCtrl.push(BtnMagicoPage);
  }

}
