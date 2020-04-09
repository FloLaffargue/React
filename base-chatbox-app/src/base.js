import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp =
    firebase.initializeApp({
        apiKey: "AIzaSyDaA2X6MtxwjXSK3s2o_VdZlvSSUByvR6w",
        authDomain: "chatbox-app-76315.firebaseapp.com",
        databaseURL: "https://chatbox-app-76315.firebaseio.com",
    })

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base

