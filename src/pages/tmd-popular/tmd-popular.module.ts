import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmdPopularPage } from './tmd-popular';

@NgModule({
  declarations: [
    TmdPopularPage,
  ],
  imports: [
    IonicPageModule.forChild(TmdPopularPage),
  ],
})
export class TmdPopularPageModule {}
