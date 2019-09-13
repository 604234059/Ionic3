import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmdNowPlayingPage } from './tmd-now-playing';

@NgModule({
  declarations: [
    TmdNowPlayingPage,
  ],
  imports: [
    IonicPageModule.forChild(TmdNowPlayingPage),
  ],
})
export class TmdNowPlayingPageModule {}
