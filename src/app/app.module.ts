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
import { DescriptionPage } from '../pages/description/description';
import { BtnMagicoPage } from '../pages/boton-magico/btn_magico';
import { BtnMagicoLugarPage } from '../pages/boton-magico-lugar/btn_magico_lugar';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriaPage,
    RegistroPage,
    SectorPage,
    SitioPage,
    DescriptionPage,
    BtnMagicoPage,
    BtnMagicoLugarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BtnMagicoLugarPage,    
    RegistroPage,
    CategoriaPage,
    HomePage,
    SectorPage,
    DescriptionPage,
    SitioPage,
    BtnMagicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
