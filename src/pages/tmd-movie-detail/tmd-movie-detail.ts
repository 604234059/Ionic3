import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';


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

  private t_array_tmb: any = [];
  private check_tts: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TmdMovieDetailPage');
    this.t_array_tmb = this.navParams.data;
    console.log(this.t_array_tmb);

  }

  //link to page
  To_tmd_vdo_trailler_page(id_tmd) {
    this.navCtrl.push("TmdVdoTraillerPage", id_tmd);
  }

  text_to_speech(text_link: string) {
    let rate_slow_fast: number = 0.75;

    if (this.check_tts == false) {
      this.check_tts = true;

      //TextToSpeech
      this.tts.speak({
        text: text_link,
        rate: rate_slow_fast
      });
    }
    else {
      this.tts.speak('');
      this.check_tts = false;
    }

  }
  
}
