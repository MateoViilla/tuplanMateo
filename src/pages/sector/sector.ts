import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { SitioPage } from '../sitio/sitio';
import { UsuarioApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { ZonaApi } from '../../shared/sdk/services';
import { LoopBackConfig } from '../../shared/sdk';
import {InicioPage} from '../inicio/inicio'


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
      image: "assets/img/BANER CATEGORIAS/basilica-medellin.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/ChtQDhdXAAA3Xq3.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/fonda-bendito-seas.jpg",
    }
];
private sectors: any;
  myIcon: string = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private usuarioApi: UsuarioApi,
    private filter: FilterProvider,
    private zonaApi: ZonaApi) {
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');

    console.log(this.filter.getCategoriaId());
    this.zonaApi.find().subscribe((zonas: any) => {
      console.log(zonas);
      this.sectors = zonas
    })


  }

  ionViewDidLoad() {
    this.selectUserIcon();
  }

  nav(sector) {
    this.filter.setZonaId(sector.id)
    this.navCtrl.push(SitioPage);


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
              this.navCtrl.push(InicioPage);
              this.usuarioApi.logout();
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
      message: this.navParams.get('userName') + 'Sesión cerrada con éxito',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }



  public selectUserIcon() {
    if (!this.usuarioApi.isAuthenticated()) {
      this.myIcon = "md-glasses";
    }
    else {
      this.myIcon = "ios-contact";
    }
  }


}
