import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { SectorPage } from '../sector/sector';
import { BtnMagicoPage } from '../boton-magico/btn_magico';
import { InicioPage } from '../inicio/inicio';
import { CategoriaApi } from '../../shared/sdk/services';
import { LoopBackConfig } from '../../shared/sdk';
import { FilterProvider } from '../../providers/filter/filter';

import { UsuarioApi } from '../../shared/sdk/services';



@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

private categorias:any;
  slides = [
    {
      image: "assets/img/BANER CATEGORIAS/basilica-medellin.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/ChtQDhdXAAA3Xq3.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/fonda-bendito-seas.jpg",
    }
];
   user

   myIcon: string = "";

   @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private usuarioApi:UsuarioApi,
              private categoriaApi:CategoriaApi,
              private filter:FilterProvider) {
                LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
                LoopBackConfig.setApiVersion('api');

  categoriaApi.find().subscribe((categorias:any)=>{
  this.categorias=categorias});
  
    
  }

  ionViewDidLoad() {
    this.selectUserIcon();
    
    
  }

  cambiarSlide(){
    this.slide.slideNext(3000, true);
  }


  toSectorPage(categoria) {
 this.filter.setCategoriaId(categoria.id)
    this.navCtrl.push(SectorPage)
  }

  

    showConfirm() {
        if (this.myIcon == "ios-contact") {
          let confirm = this.alertCtrl.create({
          title: 'Quieres cerrar sesión?',
          buttons: [
            {
              text: 'No',
              handler: () => {
              }
            },
            {
              text: 'Si',
              handler: () => {
                this.navCtrl.push(InicioPage);
                this.usuarioApi.logout();
                this.showToast('bottom');
              }
            }
          ]
         });
        confirm.present();
        }

    else {

      let confirm = this.alertCtrl.create({
        title: '¿Quieres ingresar?',
        buttons: [
          {
            text: 'No',
            handler: () => {
            }
          },
          {
            text: 'Si',
            handler: () => {
              this.navCtrl.push(InicioPage);
            }
          }
        ]
       });
      confirm.present();



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
