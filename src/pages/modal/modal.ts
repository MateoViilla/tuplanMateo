import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { UsuarioApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { LoopBackConfig } from '../../shared/sdk';


/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  private reserva:any;
  constructor(public navCtrl: NavController,private filter: FilterProvider, public navParams: NavParams, private view: ViewController, private establecimientoApi: EstablecimientoApi,private usuarioApi: UsuarioApi) {
 LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
    this.reserva={};
    this.reserva.nombre=""
    this.reserva.telefono=""
    this.reserva.email=""
 }
mostrar(){
  this.reserva.nombre=this.usuarioApi.getCachedCurrent().name;
    this.reserva.telefono=this.usuarioApi.getCachedCurrent().telefono;
    this.reserva.email=this.usuarioApi.getCachedCurrent().email;

    this.reserva.establecimiento=this.filter.getEstablecimiento();
    this.establecimientoApi.nuevaReserva(this.reserva).subscribe((mensaje: any) => {
      console.log(mensaje);
alert(mensaje.greeting);    })

    console.log(this.reserva);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal(){
    this.view.dismiss();
  }

}
