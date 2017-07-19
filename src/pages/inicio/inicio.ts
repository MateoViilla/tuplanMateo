import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { RegistroPage } from '../Registro/registro';

/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }


  toCategoria(){
    this.navCtrl.push(CategoriaPage);
  }
  
  toRegistro(){
    this.navCtrl.push(RegistroPage);
    
  }
}
