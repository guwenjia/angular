import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})
export class ChatlistPage {
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': '桃子荔枝',
        'content': '[图片]',
        'color': '../../assets/imgs/touxiang2.jpeg',
        'time':'15:15'
      },
      {
        'title': '咸鱼',
        'content': 'hhhhhhh',
        'color': '../../assets/imgs/touxiang3.jpg',
        'time':'14:20'
      },
      {
        'title': '你要糖吗',
        'content': '加油',
        'color': '../../assets/imgs/touxiang4.jpeg',
        'time':'12:22'
      },
      {
        'title': '今天也要开心哦',
        'content': '[图片][图片]',
        'color': '../../assets/imgs/touxiang6.jpeg',
        'time':'12:01'
      },
      {
        'title': 'foresee',
        'content': '今天也要开心哦',
        'color': '../../assets/imgs/touxiang7.jpg',
        'time':'11:25'
      },
      {
        'title': 'roy wang',
        'content': '幸运',
        'color': '../../assets/imgs/touxiang1.jpg',
        'time':'10:56'
      },
      {
        'title': '豆芽菜',
        'content': '[文件]',
        'color': '../../assets/imgs/touxiang2.jpeg',
        'time':'10:38'
      },
      {
        'title': '琪琪',
        'content': '你在学高数吗',
        'color': '../../assets/imgs/touxiang4.jpeg',
        'time':'10:03'
      },
      {
        'title': 'hello world',
        'content': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'color': '../../assets/imgs/touxiang6.jpeg',
        'time':'09:20'
      },
    ]
  
  
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(ChatPage, { item: item });
  }

}
