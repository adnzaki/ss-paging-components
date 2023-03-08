import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './App.vue'
import SPSelect from "../components/select/SPSelect";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.component('sp-select', SPSelect)
app.mount('#app')
