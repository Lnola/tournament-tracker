import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router';
import auth0 from '@/plugins/auth0';
import primeVue from '@/plugins/primevue';

const app = createApp(App);

app.use(router);
app.use(auth0);
app.use(primeVue);

app.mount('#app');
