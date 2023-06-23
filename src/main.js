import "./assets/tailwindstyle.css";

// import './assets/main.css'
// use AOS JS
import AOS from "aos";
import "aos/dist/aos.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.use(router);


AOS.init();

app.mount("#app");
