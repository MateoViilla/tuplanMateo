import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { SectorPage } from '../sector/sector';
import { BtnMagicoPage } from '../boton-magico/btn_magico';
import { InicioPage } from '../inicio/inicio';

import { UsuarioApi } from '../../shared/sdk/services';




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

  
   user

   myIcon: string = "";

   @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private usuarioApi:UsuarioApi) {
    
    this.user = navParams.get('userName');
  }

  ionViewDidLoad() {

    this.mostrarUsuario();
    this.selectUserIcon();
  }


  public mostrarUsuario(){
      if(this.user == ""){
      console.log("no hay usuario")   
      }
      else
      console.log(this.user);

  }
 

  slideChanged() {
    let currentIndex = this.slide.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  toSectorPage(categoria) {

   // console.log(categoria.categoriaName);
    this.navCtrl.push(SectorPage, {
      categoriaName: categoria.categoriaName,
      userName: this.user
    })
  }

    showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to log out?',
      //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Sesión cerrada');
            this.showToast('bottom');
          }
        }
      ]
    });
    confirm.present();
  }

   showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: this.navParams.get('userName')+'Session closed successfully',
      duration: 2000,
      position: position
    });
    toast.present(toast);
}

  public selectUserIcon(){
      if(this.navParams.get('userName') == ""){
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
