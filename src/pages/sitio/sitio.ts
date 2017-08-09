import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DescriptionPage } from '../description/description';
import { UsuarioApi } from '../../shared/sdk/services';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';



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

  /*Restaurants =[ 
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
  ]; */


  slides = [
    {
      image: "https://unsplash.it/1000/800?image=892",
    },
    {
      image: "https://unsplash.it/1000/800?image=882",
    },
    {
      image: "https://unsplash.it/1000/800?image=837",
    }
  ];
  /*
  
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
    */
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