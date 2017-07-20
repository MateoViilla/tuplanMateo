import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { HomePage } from '../home/home';

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
  }


  toCategoria(){
    this.navCtrl.push(CategoriaPage, {userName:""});
  }
  
  toHome(){
    this.navCtrl.push(HomePage);
    
  }
}
