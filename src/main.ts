import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadAllPlugins } from "./plugins";
import { createPinia } from "pinia";

const app = createApp(App);
// 加载所有插件
loadAllPlugins(app);

app.use(router).use(createPinia()).mount("#app");
