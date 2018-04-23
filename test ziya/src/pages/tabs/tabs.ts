import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { MessagePage } from '../message/message';
import { SigninPage} from '../signin/signin';
import { PostPage } from '../post/post';

import { ChatlistPage } from '../chatlist/chatlist';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostPage;
  tab3Root = ChatlistPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
