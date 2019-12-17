import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { 
  environment
} from '../environments/environment';

const { 
  FIREBASE_APIKEY, 
  FIREBASE_AUTH_DOMAIN, 
  FIREBASE_DATABASE_URL, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET, 
  FIREBASE_MESAGING_SENDER_ID, 
  FIREBASE_APP_ID 
} = environment;

const config = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blood-donor';
  constructor() {
    firebase.initializeApp(config);
  }
}
