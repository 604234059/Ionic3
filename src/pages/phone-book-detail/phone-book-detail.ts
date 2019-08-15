import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {

  contact = { name: '', telephone: '', imageUrl: '' };

  constructor(public navCtrl: NavController, public navP: NavParams,private call : CallNumber,private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);

  }

  Call(){
    this.call.callNumber(this.contact.telephone,true).then(()=>{}).catch((err)=>{});
  }
  Sms(){
    var options : {
      replaceLineBreaks : true,
      android :{
        intent : "INTENT"
      }
    }
    this.sms.send(this.contact.telephone,'Hi--',options).then(()=>{}).catch((err)=>{});
  }


}//end class
