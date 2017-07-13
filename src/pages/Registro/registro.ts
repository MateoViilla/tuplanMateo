import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoriaPage } from '../categoria/categoria';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  


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

  toCategories(){
    this.navCtrl.push(CategoriaPage);
  }


  saveData(){
    console.log(this.myForm.value);
  }

  private createMyForm(){
  return this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    dateBirth: ['', Validators.required],
    passwordRetry: this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    }),
    gender: ['', Validators.required],
  });
}


  
}
