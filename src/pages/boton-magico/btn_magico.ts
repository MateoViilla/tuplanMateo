import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { BtnMagicoLugarPage } from '../boton-magico-lugar/btn_magico_lugar';

@Component({
  selector: 'page-boton-magico',
  templateUrl: 'btn_magico.html'
  
})

export class BtnMagicoPage {
 constructor(public navCtrl: NavController) {

}
public toCategories(){
    this.navCtrl.push(CategoriaPage);
}
 public toBtnMagicoLugar(){
    this.navCtrl.push(BtnMagicoLugarPage);
}
 

}