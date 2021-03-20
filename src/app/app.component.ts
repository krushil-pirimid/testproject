import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private platform : Platform,
    ) {
    const firebaseConfig: any = {
      apiKey: 'AIzaSyCVDOmOEBn4sOeUaDxgRpvSi-zeNvSIGhY',
      authDomain: 'testproject-3ffb7.firebaseapp.com',
      projectId: 'testproject-3ffb7',
      storageBucket: 'testproject-3ffb7.appspot.com',
      messagingSenderId: '1056678736562',
      appId: '1:1056678736562:web:444e28c82c8ac2bc5e0fab',
      measurementId: 'G-LR3EYEQQWJ'
    };

    firebase.initializeApp( firebaseConfig );

    this.firebaseDynamicLinks.onDynamicLink()
      .subscribe((res: any) => {
        console.log(`dynamic links ${JSON.stringify(res)}`);
      }, (error: any) => {
        console.log(`dynamic links ${error}`);
      });

    this.firebaseDynamicLinks.createShortDynamicLink( {
      link: 'https://testApp.pirimid.com/tabs',
      domainUriPrefix: 'https://pirimid.page.link/',
      androidInfo: {
        androidPackageName: 'com.pirimid.testApp',
        androidFallbackLink: 'https://testApp.pirimid.com/tabs',
        androidMinPackageVersionCode: 0,
      },
    } ).then( res => {
      console.log(`dynamic links ${JSON.stringify(res)}`);
    }).catch(error => {
      console.log(`dynamic links ${error}`);
    });
  }
}
