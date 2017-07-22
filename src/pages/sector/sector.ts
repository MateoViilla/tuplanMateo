import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { SitioPage } from '../sitio/sitio';

/**
 * Generated class for the SectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sector',
  templateUrl: 'sector.html',
})

export class SectorPage {
        slides = [
          {
            image: "assets/img/christian-gertenbach-192353.jpg",
          },
          {
            image: "assets/img/christian-gertenbach-192353.jpg",
          },
          {
            image: "assets/img/christian-gertenbach-192353.jpg",
          }
      ];

      sectors = [
          {
            sectorName: "Envigado",
            image: "assets/img/christian-gertenbach-192353.jpg",
            
          },
          {
            sectorName: "Sabaneta",
            image: "assets/img/joseph-gonzalez-110827.jpg",
          },
          {
            sectorName: "Poblado",
            image: "assets/img/modesta-zemgulyte-194520.jpg",
          },
          {
            sectorName: "Bello",
            image: "assets/img/christian-gertenbach-192353.jpg",
            
          }
        ];

        myIcon: string = "";

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    
    console.log("la categoria es:"+ this.navParams.get('categoriaName'));
    console.log("El usuario es:"+ this.navParams.get('userName'));
        this.selectUserIcon();

    
    
  }

  nav(sector){
    this.navCtrl.push(SitioPage, {
      categoriaName: this.navParams.get('categoriaName'),
      sectorName: sector.sectorName,
      userName: this.navParams.get('userName')
    });
  

  }
  
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to log out?',
      //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Sesión cerrada');
            this.showToast('bottom');
          }
        }
      ]
    });
    confirm.present();
  }

   showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: this.navParams.get('userName')+'Session closed successfully',
      duration: 2000,
      position: position
    });
    toast.present(toast);
}



public selectUserIcon(){
      if(this.navParams.get('userName') == ""){
      this.myIcon = "md-glasses";
      }
    else{
      this.myIcon = "ios-contact";
    }
  }
  
}
