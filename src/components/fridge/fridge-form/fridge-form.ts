import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./fridge-form.html')
})
export class FridgeFormComponent extends Vue {
  title = '';
  content = '';
  createNote() {
    let note = {title: this.title, content: this.content};
    this.$emit('create', note);
  }

}
