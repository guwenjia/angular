import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostmessagePage } from './postmessage';

@NgModule({
  declarations: [
    PostmessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PostmessagePage),
  ],
})
export class PostmessagePageModule {}
