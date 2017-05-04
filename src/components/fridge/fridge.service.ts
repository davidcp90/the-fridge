import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyATtMoQub4d_e1cp7F9DExN2Wf4BMI65YE',
  authDomain: 'the-fridge-a8506.firebaseapp.com',
  databaseURL: 'https://the-fridge-a8506.firebaseio.com',
  storageBucket: 'the-fridge-a8506.appspot.com'
};

firebase.initializeApp(firebaseConfig);

export function createNote(data): void {
  firebase.database().ref().child('notes').push().set([data]);
}
export function fetchNotes() {
  let notes;
  firebase.database().ref().child('notes').on('value', (snapshot) => {
    notes = snapshot.val();
  });
  return notes;
}
