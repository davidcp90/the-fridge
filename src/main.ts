import * as Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';


import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { FridgeComponent, FridgeFormComponent } from './components/fridge';

// register the plugin
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue['material'].registerTheme('fridge', {
  primary: 'indigo',
  accent: 'yellow',
  warn: 'red',
  background: 'white'
});
Vue['material'].setCurrentTheme('fridge');



let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/app', component: FridgeComponent },
  ]
});

new Vue({
  el: '#app',
  router: router
});
