import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  usuario: {
    saldo:15000,
    ultimos_movimientos: {
      m1: "recarga $ 20000 en estación Hospital 10/20/2017 12:20:01; saldo total $ 20010",
      m2: "toma trén en estación Itagûi 10/21/2017 11:20:01 saldo total 18010",
      m3: "toma trén en estación Hospital 10/22/2017 08:20:01 saldo total 16010",
    }
    nombre: ""
  }
  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }



}
