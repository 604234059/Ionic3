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
  private check_tts: boolean = false;
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

    if (this.check_tts == false) {
      this.tts.speak({
        text: text_link,
        rate: 0
      });
      this.check_tts = true;
      console.log('op '+this.check_tts);

    } else {
      this.tts.speak('');
      this.check_tts = false;
      console.log('ed '+this.check_tts);
    }

  }
}
