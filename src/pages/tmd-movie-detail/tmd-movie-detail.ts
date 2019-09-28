import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TmdMovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tmd-movie-detail',
  templateUrl: 'tmd-movie-detail.html',
})
export class TmdMovieDetailPage {

  t_array_tmb: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdMovieDetailPage');
    this.t_array_tmb = this.navParams.data;
    console.log(this.t_array_tmb);
  }

}
