// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZuz0cyRABljPcOrgaNM4dPrvJHsJblgY",
    authDomain: "tribal-basket.firebaseapp.com",
    projectId: "tribal-basket",
    storageBucket: "tribal-basket.appspot.com",
    messagingSenderId: "139375618606",
    appId: "1:139375618606:web:c6014ed0f066e5ae68cdbf",
    measurementId: "G-8WC89GPHFL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
