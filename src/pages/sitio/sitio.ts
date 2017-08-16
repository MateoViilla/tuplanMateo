import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DescriptionPage } from '../description/description';
import { UsuarioApi } from '../../shared/sdk/services';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';
import { InicioPage } from '../inicio/inicio';




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

  slides = [
    {
      image: "assets/img/BANER CATEGORIAS/basilica-medellin.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/ChtQDhdXAAA3Xq3.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/fonda-bendito-seas.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/la-sagrada.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/logo-lico-deluxe-parque-lleras.jpg",
    },
    {
      image: "assets/img/BANER CATEGORIAS/museums-schrank_018_0.jpg",
    }
];
  private listas: any;
  myIcon: string = "";
  genero: String = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private usuarioApi: UsuarioApi,
    private establecimientoApi: EstablecimientoApi,
    private filter: FilterProvider) {

    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
      this.genero = this.filter.getGenero();

     
      
      if(this.filter.getGenero() == null){
          establecimientoApi.find({ where: { categoriaId: this.filter.getCategoriaId(), zonaId: this.filter.getZonaId() } }).subscribe((sitios: any) => {
            console.log(sitios);
            this.listas = sitios
          });
        }
        else {
          this.establecimientoApi.find({ where: { categoriaId: this.filter.getCategoriaId(), zonaId: this.filter.getZonaId(), music: this.filter.getGenero() } }).subscribe((sitios: any) => {
          this.listas = sitios
          });
        }
        

  }

  ionViewDidLoad() {
    this.selectUserIcon();
    console.log(this.filter.getGenero());
  }



  nav(sitio) {
    this.filter.setEstablecimiento(sitio.nombre);
    this.filter.setEstablecimientoId(sitio.id);
    this.navCtrl.push(DescriptionPage);
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
      message: this.navParams.get('userName') + 'Session closed successfully',
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