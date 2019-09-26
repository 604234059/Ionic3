import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApikeyProvider } from '../../providers/apikey/apikey';

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

  t_array_tmb:number=0;

  array_tmb_dtail: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_tmd: ApikeyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdMovieDetailPage');
    this.t_array_tmb = this.navParams.data;
    console.log(this.t_array_tmb);
  }

}
