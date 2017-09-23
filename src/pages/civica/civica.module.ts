import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CivicaPage } from './civica';

@NgModule({
  declarations: [
    CivicaPage,
  ],
  imports: [
    IonicPageModule.forChild(CivicaPage),
  ],
})
export class CivicaPageModule {}
