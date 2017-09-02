import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';
import { CategoriaPage } from '../categoria/categoria';
/**
 * Generated class for the ModalNoAuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-no-auth',
  templateUrl: 'modal-no-auth.html',
})
export class ModalNoAuthPage {
  reserva:any;
  constructor(public alertCtrl:AlertController ,public navCtrl: NavController,private filter: FilterProvider, public navParams: NavParams, private view: ViewController, private establecimientoApi: EstablecimientoApi) {
this.reserva={};
this.reserva.establecimiento="";
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
    
    
  }
  
  mostrar(){
  if (this.reserva.numeroPersonas == null || this.reserva.numeroPersona == ""
     || this.reserva.nombre == null || this.reserva.nombre == ""
     || this.reserva.telefono == null || this.reserva.telefono == ""
     || this.reserva.correo == null || this.reserva.correo == ""
  ){
     this.presentAlert("No se pudo completar","Debes llenar todos los campos para poder continuar con tu reserva");
    } else {
     var hoy  = new Date();
     var fechaFormulario = new Date(this.reserva.date);

      // Comparamos solo las fechas => no las horas!!
      hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas
      fechaFormulario.setHours(0,0,0,0);
      if (hoy >= fechaFormulario) {
        console.log(hoy);
        console.log(fechaFormulario);
         this.presentAlert("No se pudo completar","La fecha de reserva debe ser mínimo 24 horas apartir de la fecha actual");
      }
      else {

    this.reserva.establecimiento=this.filter.getEstablecimiento();
    this.establecimientoApi.nuevaReserva(this.reserva).subscribe((mensaje: any) => {
        })
 this.toCategoria();
        this.presentAlert("Reserva exitosa", "Se ha procesado tu solicitud, en unas horas el establecimiento te confirmará la reserva");
       
      console.log(this.reserva);
  }

    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNoAuthPage');
  }
   closeModal(){
    this.view.dismiss();
  }

 presentAlert(titulo, mensaje) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: mensaje,
    buttons: ['Entendido']
    
  });
  alert.present();
}
toCategoria() {
    this.navCtrl.push(CategoriaPage, { userName: "" });
  }


}
