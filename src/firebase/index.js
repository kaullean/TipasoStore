import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyABGXO1yPUz2ZqtVKNuyR4nboaKWeSLMxM",
    authDomain: "tipazo-store.firebaseapp.com",
    projectId: "tipazo-store",
    storageBucket: "tipazo-store.appspot.com",
    messagingSenderId: "367160026770",
    appId: "1:367160026770:web:342e331c9622aedbfa684b"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
