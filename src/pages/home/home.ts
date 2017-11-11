import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { RestaurantePage } from '../restaurante/restaurante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
   
  constructor(public navCtrl: NavController) {

  }

  abrirRestaurante(restaurante) {
    this.navCtrl.push(RestaurantePage, {restaurante: restaurante});
  }

}
