import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import {FridgeFormComponent} from './fridge-form';
import {FridgeNoteComponent} from './fridge-note';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyATtMoQub4d_e1cp7F9DExN2Wf4BMI65YE',
  authDomain: 'the-fridge-a8506.firebaseapp.com',
  databaseURL: 'https://the-fridge-a8506.firebaseio.com',
  storageBucket: 'the-fridge-a8506.appspot.com'
};

firebase.initializeApp(firebaseConfig);
Vue.component('fridge-form', FridgeFormComponent);
Vue.component('fridge-note', FridgeNoteComponent);

@Component({
    template: require('./fridge.html')
})
export class FridgeComponent extends Vue {
  notesList = [];

  createNote(data): void {
    console.log(data);
    firebase.database().ref().child('notes').push().set([data]);
  }

  created() {
    let vm = this;
    firebase.database().ref().child('notes').on('child_added', (snapshot) => {
      let note = snapshot.val();
      vm.notesList.unshift(note);
      console.log(snapshot.val());
    });
  }

}
