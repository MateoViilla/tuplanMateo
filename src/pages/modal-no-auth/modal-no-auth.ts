import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';
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
  constructor(public navCtrl: NavController,private filter: FilterProvider, public navParams: NavParams, private view: ViewController, private establecimientoApi: EstablecimientoApi) {
this.reserva={};
this.reserva.establecimiento="";
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
    
    
  }
  
  mostrar(){
    this.reserva.establecimiento=this.filter.getEstablecimiento();
    this.establecimientoApi.nuevaReserva(this.reserva).subscribe((mensaje: any) => {
      console.log(mensaje);
alert(mensaje.greeting);    })

    console.log(this.reserva);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNoAuthPage');
  }
   closeModal(){
    this.view.dismiss();
  }

}
