import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../Registro/registro';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
    userName:"",
    password:""
  };

  constructor(public navCtrl: NavController) {

  }
    logForm() {
    console.log(this.user);
  }

  signUp(){
    this.navCtrl.push(RegistroPage);
  }

  public toCategories(){
    this.navCtrl.push(CategoriaPage,{
      userName: this.user.userName,
    });
  }

  

}
