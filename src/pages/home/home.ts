import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { RestaurantePage } from '../restaurante/restaurante';
import { RestauranteProvider } from '../../providers/restaurante/restaurante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  listaRestaurante: any;

  constructor(public navCtrl: NavController,
              private restauranteProvider: RestauranteProvider) {
  }

  ionViewDidLoad() {
    this.restauranteProvider.getRestaurantes().subscribe(resultado => {
      this.listaRestaurante = resultado;
    }, (err) => {
      console.log('Erro getRestaurantes: ' + err);
    });
  }

  abrirRestaurante(restaurante) {
    this.navCtrl.push(RestaurantePage, {restaurante: restaurante});
  }

}
