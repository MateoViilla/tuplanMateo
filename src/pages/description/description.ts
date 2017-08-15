import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, ModalController, AlertController} from 'ionic-angular';
import { UsuarioApi } from '../../shared/sdk/services';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';
import { Establecimiento } from '../../shared/sdk/models';


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
  ];
  /*
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
        DescriptionText:"1, Garrafa + Kit de cumpleaños + aguas + cervezas, 450.000.     2, Garrafa + Kit de cumpleaños + aguas + cervezas, 450.000"
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

*/
    comidas 
  private establecimiento: Establecimiento=new Establecimiento();

  @ViewChild(Slides) slide: Slides;
  constructor(public navCtrl: NavController, private photoViewer: PhotoViewer,
    private usuarioApi: UsuarioApi, public navParams: NavParams,
    private toastCtrl: ToastController, public modalCtrl: ModalController,
    private establecimientoApi: EstablecimientoApi, private filter: FilterProvider,
    private alertCtrl:AlertController) {

    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');

    this.establecimientoApi.findById(this.filter.getEstablecimientoId()).subscribe((establecimiento: Establecimiento) => {
      console.log(establecimiento);
      this.establecimiento = establecimiento;
      this.slides=establecimiento.images;
    });

    this.validarComida();
    

  }


  validarComida(){
    if(this.establecimiento.flowPrice == 0){
      this.comidas  == "NO PRESTA SERVICIO";
    }
    
  }
  ionViewDidLoad() {
    
  }

  cambiarSlide(){
    this.slide.slideNext(3000, true);
  }

  slideChanged() {
  }
  presentToast(titulo, mensaje) {
    let toast = this.toastCtrl.create({
      message: titulo + ': \n' + mensaje,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }

  selectModal() {
    if (!this.usuarioApi.isAuthenticated()) {
      this.openModalNoAuth();
    }
    else {
      this.openModal();
    }
  }

  openModal() {
    const myModal = this.modalCtrl.create('ModalPage');
    myModal.present();
  }
  openModalNoAuth() {
    const myModal = this.modalCtrl.create('ModalNoAuthPage');
    myModal.present();
  } 

  openPhoto(url) {
    this.photoViewer.show(url);

  }
  openModalMap() {
    const myModal = this.modalCtrl.create('MapPage', this.establecimiento);
    myModal.present();
  }

  presentAlert(titulo, mensaje) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: mensaje,
    buttons: ['Entendido']
    
  });
  alert.present();
}

}
