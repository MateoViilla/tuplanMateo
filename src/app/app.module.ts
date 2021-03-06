import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/Registro/registro';
import { CategoriaPage } from '../pages/categoria/categoria';
import { SectorPage } from '../pages/sector/sector';
import { SitioPage } from '../pages/sitio/sitio';
import { InicioPage } from '../pages/inicio/inicio';

import { DescriptionPage } from '../pages/description/description';
import { BtnMagicoPage } from '../pages/boton-magico/btn_magico';
import { GlobalVarProvider } from '../providers/global-var/global-var';
import { SDKBrowserModule } from '../shared/sdk/index';
import { FilterProvider } from '../providers/filter/filter';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    HomePage,
    CategoriaPage,
    RegistroPage,
    SectorPage,
    SitioPage,
    DescriptionPage,
    BtnMagicoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    RegistroPage,
    InicioPage,
    CategoriaPage,
    HomePage,
    SectorPage,
    DescriptionPage,
    SitioPage,
    BtnMagicoPage
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVarProvider,
    FilterProvider
  ]
})
export class AppModule {}
