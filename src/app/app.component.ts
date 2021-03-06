import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioApi } from '../shared/sdk/services';
import { CategoriaPage } from '../pages/categoria/categoria';

import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform,usuarioApi:UsuarioApi, statusBar: StatusBar, splashScreen: SplashScreen) {
    let self = this;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log(usuarioApi.isAuthenticated());
      if (usuarioApi.isAuthenticated()) {
            self.rootPage = CategoriaPage;
        } else {
            self.rootPage = InicioPage;
        }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

