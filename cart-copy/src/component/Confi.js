import* as firebase from 'firebase';

const configure =  {
    apiKey: "AIzaSyDdyD1tTaczRaGyHiqxpgi7ubBCXLinCwc",
    authDomain: "signinout-70718.firebaseapp.com",
    databaseURL: "https://signinout-70718.firebaseio.com",
    projectId: "signinout-70718",
    storageBucket: "signinout-70718.appspot.com",
    messagingSenderId: "717139185165",
    appId: "1:717139185165:web:d543a4dc37e9b54bc9cf44"
  };

  firebase.initializeApp(configure);

  const database = firebase.database()

  export {database}