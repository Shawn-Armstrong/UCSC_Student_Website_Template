// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
// import '@mdi/font/css/materialdesignicons.css';

// Vue.use(Vuetify);

// export default new Vuetify({
//   theme: { dark: false },
// });

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#006aad',
        secondary: '#003c6c',
        accent: '#13a5dc',
        background: '#EEEEE',
        tableBg: '#f5f5f5',
        info: '#007988',
        warning: '#f29813',
        error: '#da216d',
        success: '#93c02d',
      },
    },
  },
});