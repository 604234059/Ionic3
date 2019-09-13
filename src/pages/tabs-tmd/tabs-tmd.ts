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
    { imgurl: 'assets/imgs/video-camera.svg', list1: '55', list2: '66' },
    { imgurl: 'assets/imgs/film-roll.svg', list1: '55', list2: '66' },
    { imgurl: 'assets/imgs/clapperboard.svg', list1: '55', list2: '66' },
    { imgurl: 'assets/imgs/.svg', list1: '55', list2: '66' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsTmdPage');
  }

}
