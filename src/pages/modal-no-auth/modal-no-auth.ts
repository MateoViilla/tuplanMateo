import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  reserva:{};
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.reserva={}
  }
  
  mostrar(){
    console.log(this.reserva);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNoAuthPage');
  }
   closeModal(){
    this.view.dismiss();
  }

}
