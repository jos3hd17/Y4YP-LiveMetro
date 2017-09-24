import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{TrenPage} from '../tren/tren'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  trenes:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = this.navParams.get('item');
    this.trenes = this.navParams.get('metro');

    console.log(this.trenes);
    this.items = [];
    for (let i = 0; i < this.trenes.length ; i++) {
      this.items.push({
        title: this.trenes[i].id,
        note: 'tiene: '+6+' vagones',
        icon: "bus"
      });
    }
  }
  irDescription(name){
    
    this.navCtrl.push(TrenPage, {id:name});
  }

  
}
