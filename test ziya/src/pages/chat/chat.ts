import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatlistPage } from '../chatlist/chatlist';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {    
  item;
  constructor(public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
   this.item = params.data.item;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatlistPage');
  }

}
