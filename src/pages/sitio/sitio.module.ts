import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitioPage } from './sitio';

@NgModule({
  declarations: [
    SitioPage,
  ],
  imports: [
    IonicPageModule.forChild(SitioPage),
  ],
  exports: [
    SitioPage
  ]
})
export class SitioPageModule {}
