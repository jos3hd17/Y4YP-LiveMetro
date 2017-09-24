import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrenPage } from './tren';

@NgModule({
  declarations: [
    TrenPage,
  ],
  imports: [
    IonicPageModule.forChild(TrenPage),
  ],
})
export class TrenPageModule {}
