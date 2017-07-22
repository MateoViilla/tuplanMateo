import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../Registro/registro';
import { CategoriaPage } from '../categoria/categoria';
import { Usuario, AccessToken } from '../../shared/sdk/models';
import { UsuarioApi } from '../../shared/sdk/services';
import { LoopBackConfig } from '../../shared/sdk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
    userName:"",
    password:""
  };
 private account:Usuario=new Usuario();
  constructor(public navCtrl: NavController,private usuarioApi:UsuarioApi) {
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');

  }
    logForm() {
    console.log(this.user);
  }
private signin(): void {
        this.usuarioApi.login(this.account).subscribe((token: AccessToken) => this.toCategories(),    function(error) { alert("Error happened" + error)});
        
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
