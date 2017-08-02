import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../Registro/registro';
import { CategoriaPage } from '../categoria/categoria';
import { Usuario, AccessToken } from '../../shared/sdk/models';
import { UsuarioApi } from '../../shared/sdk/services';
import { LoopBackConfig } from '../../shared/sdk';
import { ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController,private usuarioApi:UsuarioApi,public toastCtrl: ToastController
) {
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');

  }
    logForm() {
    console.log(this.user);
  }
private signin(): void {
        this.usuarioApi.login(this.account).subscribe((token: AccessToken) => this.toCategories(), (error:any)=>this.presentToast(error) 
        );
        
    }
   public presentToast(error:any){
     console.log(error);
      var err:any;
       if(error.statusCode==401){
         err="Usuario o Contraseña Incorrectos"
       }if(error.statusCode==400){
         err="Se deben llenar todos los campos"
       }if(err==null){
         err="No hay conexion"
       }
       let toast = this.toastCtrl.create({
      message: err,
      duration: 3000
   });
       toast.present();

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
