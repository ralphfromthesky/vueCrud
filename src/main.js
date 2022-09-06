import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import routes from './routes/routes'

const firebaseConfig = {
    apiKey: "AIzaSyDxdkcdArTN14ucTiFW3hMwc8nWYsNg76c",
    authDomain: "vuecrud-d5ed3.firebaseapp.com",
    projectId: "vuecrud-d5ed3",
    storageBucket: "vuecrud-d5ed3.appspot.com",
    messagingSenderId: "889749258777",
    appId: "1:889749258777:web:995cdab3e9041ab3d4a088"
  };

firebase.initializeApp(firebaseConfig);


createApp(App).use(routes).mount('#app')
