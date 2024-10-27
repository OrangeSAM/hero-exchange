import { createApp } from "vue";
import "./style.css";
import router from "./router";

import App from "./App.vue";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.use(router);
app.use(Tabbar);
app.use(TabbarItem);

app.mount("#app");
