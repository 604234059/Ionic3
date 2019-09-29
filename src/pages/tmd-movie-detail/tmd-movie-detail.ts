import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
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

  t_array_tmb: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer, private api_tmd: ApikeyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdMovieDetailPage');
    this.t_array_tmb = this.navParams.data;
    console.log(this.t_array_tmb);

  }

  //open Video Trailler
  open_youtube_Trailler() {
    var you_tube: any = [];

    this.api_tmd.get_Api_Videos(this.t_array_tmb.id).subscribe(movies => {
      you_tube = movies['results'];
      console.log(movies);
      
      //native you tube
      this.youtube.openVideo(you_tube[0].key);
      console.log('you_tube'); 
      console.log(you_tube[0].key);
    }); 
  }
}
