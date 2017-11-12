import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {
  restaurante: string;
  tabsRestaurante: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.restaurante = this.navParams.get('restaurante');
    this.tabsRestaurante = 'cardapio';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantePage');
  }

}
