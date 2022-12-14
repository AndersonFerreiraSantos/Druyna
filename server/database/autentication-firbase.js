import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import config from './serviceAccountKey';

const inicialized = firebase.inicialized(config);
const db = inicialized.firestore();