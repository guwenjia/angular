import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { PostmessagePage } from '../postmessage/postmessage';
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
  }

  list=['资产包转让','债权转让','固产转让','典当担保','融资借贷','悬赏信息','商业保理','尽职调查','资产求购','委外催收','法律服务'];

push(){
  let profileModal = this.modalCtrl.create(PostmessagePage);
  profileModal.present();
}

}
