import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoriaPage } from '../categoria/categoria';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoopBackConfig } from '../../shared/sdk';
import { Usuario, AccessToken } from '../../shared/sdk/models';
import { UsuarioApi } from '../../shared/sdk/services';




@Component({
  selector: 'page-registro page-categorias',
  templateUrl: 'registro.html'
})
export class RegistroPage {
   private account: Usuario = new Usuario();
    
  myForm: FormGroup;
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    private usuarioApi: UsuarioApi) {
    LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
    LoopBackConfig.setApiVersion('api');
    this.myForm = this.createMyForm();
            console.log(this.usuarioApi.getCachedCurrent());

  
            

  }
  private signup(): void {
        this.usuarioApi.create(this.account).subscribe((account: Account) => this.signin());
    }
 private signin(): void {
        this.usuarioApi.login(this.account).subscribe((token: AccessToken) => this.goToCategories());
        
    }



  
  private createMyForm(){
  return this.formBuilder.group({

    name: ['', Validators.compose([Validators.maxLength(10),Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    email : ['', [Validators.required, Validators.email]],
    dateBirth: [''],
    password: ['', [Validators.required,Validators.minLength(4), Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    passwordConfirmation: ['',[Validators.required, Validators.minLength(4), Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    phone: ['', Validators.compose([Validators.maxLength(20),Validators.minLength(5), Validators.pattern('[0-9 ]*'), Validators.required])],
    magicCode: ['']
  });

  }

    
goToCategories(): void{
  this.navCtrl.push(CategoriaPage);
}
  presentToast() {
    let toast = this.toastCtrl.create({ 
      message: 'Cuenta creada correctamente',
      duration: 3000
    });
    toast.present();
    this.signup();
  }

  onClick() {
    this.navCtrl.push(HomePage);
  }

  toHome() {
    this.navCtrl.push(HomePage);
  }


  saveData() {
    console.log(this.myForm.value);
  }
  validarContrasena(psw1:string, psw2: string){

  }



}
