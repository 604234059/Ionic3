import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmdViewPage } from './tmd-view';

@NgModule({
  declarations: [
    TmdViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TmdViewPage),
  ],
})
export class TmdViewPageModule {}
