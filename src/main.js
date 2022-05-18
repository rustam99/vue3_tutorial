import { createApp } from 'vue'
import store from './store';
import router from './router';
import App from './App';
import Modal from '@/components/modal';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('modal', Modal);

(async () => {
	app.mount('#app');
})();

import 'normalize.css';
import '@/assets/fonts/fonts.css';
import '@/assets/css/base.scss';
