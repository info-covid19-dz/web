import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
      config: { id: 'G-W47ZYKL84K' },
      appName: 'Info COVID19 Algérie',
    }, app.router);
  }
