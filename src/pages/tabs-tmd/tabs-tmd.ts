import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsTmdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-tmd',
  templateUrl: 'tabs-tmd.html',
})
export class TabsTmdPage {
  tmd_list = [
    { imgurl: 'assets/imgs/video-camera.svg', list1: 'Now', list2: 'Now Playing' },
    { imgurl: 'assets/imgs/film-roll.svg', list1: 'Upcoming', list2: 'Upcoming Movie' },
    { imgurl: 'assets/imgs/clapperboard.svg', list1: 'Popular', list2: 'Popular Movie' },
    { imgurl: 'assets/imgs/top-rated.svg', list1: 'Top Rated', list2: 'Top Rated Movie' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsTmdPage');

  }

  //link to page
  To_tmdview_page(item) {
    this.navCtrl.push("TmdViewPage", item);
  }



}
