import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApikeyProvider } from '../../providers/apikey/apikey';

/**
 * Generated class for the TmdViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tmd-view',
  templateUrl: 'tmd-view.html',
})
export class TmdViewPage {
  array_tmb: any = [];

  //แก้โดยเปลี่ยนเป็น any และลบ{}
  con_tmd_list: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_tmd: ApikeyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdViewPage');
    this.con_tmd_list = this.navParams.data;
    console.log(this.con_tmd_list);

    //ถ้า list2 ใน array con_tmd_list =หน้านั้นๆให้เรียกใช้ เมธอด load_api_ประจำหน้านั้น
    if (this.con_tmd_list.list2 == 'Now Playing') {
      this.load_api_nowplaying();
      console.log('load_api_nowplaying()');

    } else if (this.con_tmd_list.list2 == 'Upcoming Movie') {
      this.load_api_upcoming();
      console.log('load_api_upcoming()');

    } else if (this.con_tmd_list.list2 == 'Popular Movie') {
      this.load_api_popular();
      console.log('load_api_popular()');

    } else if (this.con_tmd_list.list2 == 'Top Rated Movie') {
      this.load_api_toprate();
      console.log('load_api_toprate()');
    }

  }

  //อ่านjson
  load_api_nowplaying() {
    this.api_tmd.get_Api_Movienow().subscribe(movies => {
      this.array_tmb = movies['results'];
      console.log(movies);
    });
  }

  load_api_upcoming() {
    this.api_tmd.get_Api_Movieup().subscribe(movies => {
      this.array_tmb = movies['results'];
      console.log(movies);
    });
  }

  load_api_popular() {
    this.api_tmd.get_Api_Moviepop().subscribe(movies => {
      this.array_tmb = movies['results'];
      console.log(movies);
    });
  }

  load_api_toprate() {
    this.api_tmd.get_Api_Movietop().subscribe(movies => {
      this.array_tmb = movies['results'];
      console.log(movies);
    });
  }


  //link to page
  To_tmddetail_page(item) {
    this.navCtrl.push("TmdMovieDetailPage", item);
  }

}
