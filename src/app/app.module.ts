import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/Registro/registro';
import { CategoriaPage } from '../pages/categoria/categoria';
import { SectorPage } from '../pages/sector/sector';
import { SitioPage } from '../pages/sitio/sitio';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriaPage,
    RegistroPage,
    SectorPage,
    SitioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroPage,
    CategoriaPage,
    HomePage,
    SectorPage,
    SitioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
