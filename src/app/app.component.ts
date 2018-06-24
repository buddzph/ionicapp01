import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;
  rootPage:any = HomePage;
  pages: Array<{title: string, icon: string, component: any}>;
  item: Array<{name: 'dog', age: 1}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      { title: 'About', icon: 'list-box', component: AboutPage }
    ];
  }

  openPage(p) {
    // console.log('Page: ', p);
    this.nav.setRoot(p.title);
  } 
}

