
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ScannerPage } from './../pages/scanner/scanner';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { JsonMenuPage } from './../pages/json-menu/json-menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Flashlight } from '@ionic-native/flashlight';
// Import GttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { TabsTmdPage } from '../pages/tabs-tmd/tabs-tmd';
import { ApikeyProvider } from '../providers/apikey/apikey';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, LoginPage, ScannerPage, FlashlightPage, JsonMenuPage,TabsTmdPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, LoginPage, ScannerPage, FlashlightPage, JsonMenuPage,TabsTmdPage
  ],
  providers: [
    StatusBar,
    SplashScreen, CallNumber, SMS, BarcodeScanner, Flashlight,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApikeyProvider
  ]
})
export class AppModule { }
