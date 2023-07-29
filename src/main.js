import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';
import '/node_modules/primeflex/primeflex.css';
import Tag from 'primevue/tag';

const app = createApp(App)
app.component('PMenubar', Menubar)
app.component('PInputText',InputText)
app.component('PButton', Button)
app.component('PCarousel', Carousel);
app.component('PTag', Tag);


app.use(router)
app.use(store)
app.use(PrimeVue);
app.mount('#app')
