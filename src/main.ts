import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// const app: ReturnType<typeof createApp> = createApp(App)
const app = createApp(App);
app.use(store).use(router).mount("#app");

// createApp(App).use(store).use(router).mount("#app");
