import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProximosTrenesPage } from './proximos-trenes';

@NgModule({
  declarations: [
    ProximosTrenesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProximosTrenesPage),
  ],
})
export class ProximosTrenesPageModule {}
