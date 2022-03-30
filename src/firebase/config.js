import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0uXvqdzbJPOE6BOnXQAvTNp1XAmxwtAA",
  authDomain: "actividad-10-jared-alvidrez.firebaseapp.com",
  databaseURL: "https://actividad-10-jared-alvidrez-default-rtdb.firebaseio.com",
  projectId: "actividad-10-jared-alvidrez",
  storageBucket: "actividad-10-jared-alvidrez.appspot.com",
  messagingSenderId: "618919908748",
  appId: "1:618919908748:web:cc508036b16bc0a3cab2a9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
