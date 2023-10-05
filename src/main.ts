import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import auth0 from '@/plugins/auth0';

const app = createApp(App);

app.use(router);
app.use(auth0);

app.mount('#app');
