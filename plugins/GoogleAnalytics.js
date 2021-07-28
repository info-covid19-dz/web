import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
      config: { id: 'G-MDL142QE6B' },
      appName: 'Info COVID19 Algérie',
    }, app.router);
  }
