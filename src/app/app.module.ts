import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CivicaPage } from '../pages/civica/civica';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProximosTrenesPage } from '../pages/proximos-trenes/proximos-trenes';
import { TrenesProvider } from '../providers/trenes/trenes';
import { TrenPage } from '../pages/tren/tren';
import {HttpModule} from '@angular/http'
import { UsuarioProvider } from '../providers/usuario/usuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CivicaPage,
    ProximosTrenesPage,
    TrenPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CivicaPage,
    ProximosTrenesPage,
    TrenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrenesProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
