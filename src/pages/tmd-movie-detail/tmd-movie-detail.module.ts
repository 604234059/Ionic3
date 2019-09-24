import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmdMovieDetailPage } from './tmd-movie-detail';

@NgModule({
  declarations: [
    TmdMovieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TmdMovieDetailPage),
  ],
})
export class TmdMovieDetailPageModule {}
