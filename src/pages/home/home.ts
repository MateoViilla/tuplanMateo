import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../Registro/registro';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signUp(){
    this.navCtrl.push(RegistroPage);
  }

  public toCategories(){
    this.navCtrl.push(CategoriaPage);
  }

  

}
