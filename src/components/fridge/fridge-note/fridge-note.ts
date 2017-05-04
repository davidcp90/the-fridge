import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Component({
    template: require('./fridge-note.html')
})
export class FridgeNoteComponent extends Vue {
  @Prop()
  note: Array<any>;
}
