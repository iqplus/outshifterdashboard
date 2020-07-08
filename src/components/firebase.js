import app from 'firebase/app'
import 'firebase/auth'
//import 'firebase/firebase-store'

const config = {
      // Your web app's Firebase configuration
    apiKey: "AIzaSyBrs-lXkYSEgqrrpGoe00ji23aHXhuhST0",
    authDomain: "outshifter-qa.firebaseapp.com",
    databaseURL: "https://outshifter-qa.firebaseio.com",
    projectId: "outshifter-qa",
    storageBucket: "outshifter-qa.appspot.com",
    messagingSenderId: "197176618277",
    appId: "1:197176618277:web:327b13dbcfeed670f9fecc"
};

//utility class
class Firebase {
    constructor(){
        // Initialize Firebase
        app.initializeApp(config);
        this.auth = app.auth()
        //this.db = app.firestore()
    }

    login (email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout(){
        return this.auth.signOut()
    }

}

export default new Firebase()