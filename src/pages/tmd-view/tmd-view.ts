import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  vvv= '';
  con_tmd_list = [{ imgurl: '', list1: '', list2: '' }]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdViewPage');
    this.con_tmd_list = this.navParams.data;
    console.log(this.con_tmd_list);

    let url_tmd = [ { nowplaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=10810cc7ad7c4a572a42e3ab7952ebca&language=en-US&page=1' },
                    { Upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=10810cc7ad7c4a572a42e3ab7952ebca&language=en-US&page=1' },
                    { Popular: 'https://api.themoviedb.org/3/movie/popular?api_key=10810cc7ad7c4a572a42e3ab7952ebca&language=en-US&page=1' },
                    { TopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=10810cc7ad7c4a572a42e3ab7952ebca&language=en-US&page=1' }
    ]

    //this.http.post(url_tmd[0],'').subscribe(
     // (data: any) => {
       // this.vvv = data.message;
      //}
   //);

  }

}
