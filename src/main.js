import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './router/index.js';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import VideoBackground from 'vue-responsive-video-background-player';

library.add(fas, faFileAlt, faGithub, faLinkedin, faEnvelope);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.component('video-background', VideoBackground);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});

new Vue({
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount('#app');
