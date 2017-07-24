import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNoAuthPage } from './modal-no-auth';

@NgModule({
  declarations: [
    ModalNoAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNoAuthPage),
  ],
  exports: [
    ModalNoAuthPage
  ]
})
export class ModalNoAuthPageModule {}
