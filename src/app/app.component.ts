import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaPage } from '../pages/categoria/categoria';
import { UsuarioApi } from '../shared/sdk/services';

import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =CategoriaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

