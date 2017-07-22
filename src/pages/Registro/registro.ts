import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoriaPage } from '../categoria/categoria';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  



@Component({
  selector: 'page-registro page-categorias',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder ) {

                this.myForm = this.createMyForm();

              



  }
  
  private createMyForm(){
  return this.formBuilder.group({

    name: ['', Validators.compose([Validators.maxLength(10),Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    email : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
    phone: ['', Validators.compose([Validators.maxLength(20),Validators.minLength(5), Validators.pattern('[0-9 ]*'), Validators.required])],
    dateBirth: ['', Validators.required],
    passwordRetry: this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    }),
    gender: ['', Validators.required],
    magicCode: ['']
  });

  }

   emailValidator(control: FormControl): {[s: string]: boolean} {
    if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
      return {invalidEmail: true};
    }
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

  onClick(){
    this.navCtrl.push(HomePage);
  }

  toHome(){
    this.navCtrl.push(HomePage);
  }


  saveData(){
    console.log(this.myForm.value);
  }
  validarContrasena(psw1:string, psw2: string){

  }



  
}
