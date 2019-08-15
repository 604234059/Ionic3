import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: '1', telephone: '0623724051', imageUrl: 'assets/imgs/1.jpg'},
                  {name: '2', telephone: '0800000000', imageUrl: 'assets/imgs/2.jpg'},
                  {name: '3', telephone: '0800000000', imageUrl: 'assets/imgs/3.jpg'},
                  {name: '4', telephone: '0800000000', imageUrl: 'assets/imgs/4.jpg'},
                  {name: '5', telephone: '0800000000', imageUrl: 'assets/imgs/5.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);

  }

}//end class
