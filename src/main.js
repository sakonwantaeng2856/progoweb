import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
createApp(App).use(store).use(router).mount("#app");                               