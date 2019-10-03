import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApikeyProvider } from '../../providers/apikey/apikey';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the TmdVdoTraillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tmd-vdo-trailler',
  templateUrl: 'tmd-vdo-trailler.html',
})
export class TmdVdoTraillerPage {

  private key_youtube_tmb: any;
  you_tube_array_tmb: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private api_tmd: ApikeyProvider, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdVdoTraillerPage');
    this.key_youtube_tmb = this.navParams.data;
    console.log(this.key_youtube_tmb);

    this.load_api_youtube_Trailler();
  }

  load_api_youtube_Trailler() {
    this.api_tmd.get_Api_Videos(this.key_youtube_tmb).subscribe(movies => {
      this.you_tube_array_tmb = movies['results'];
      console.log(movies);
    });
  }

  url_youtube_Trailler(key) {
    //return you tube
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + key + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
}
