import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule,JsonpModule } from '@angular/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HelloPage } from '../pages/hello/hello';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { SigninPage } from '../pages/signin/signin';
import { PostPage } from '../pages/post/post';
import { PostmessagePage } from '../pages/postmessage/postmessage';
import { ChatlistPage } from '../pages/chatlist/chatlist';
import { ChatPage } from '../pages/chat/chat';
import { AboutfabuPage } from '../pages/aboutfabu/aboutfabu';
import { FormsModule} from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    LoginPage,
    MessagePage,
    SigninPage,
    PostPage,
    PostmessagePage,
    ChatlistPage,
    ChatPage,
    AboutfabuPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    JsonpModule,

    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    LoginPage,
    MessagePage,
    SigninPage,
    PostPage,
    PostmessagePage,
    ChatlistPage,
    ChatPage,
    AboutfabuPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
