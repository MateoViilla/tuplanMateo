import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { BtnMagicoPage } from '../boton-magico/btn_magico';
import { DescriptionPage } from '../description/description';


@Component({
  selector: 'page-boton-magico-lugar',
  templateUrl: 'btn_magico_lugar.html'
  
})

export class BtnMagicoLugarPage {
 constructor(public navCtrl: NavController) {

}
public toCategories(){
    this.navCtrl.push(CategoriaPage);
}
public toMagicButton(){
    this.navCtrl.push(BtnMagicoPage);  
}

toDescriptionPage(){
    this.navCtrl.push(DescriptionPage);
}
 
}