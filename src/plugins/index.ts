import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue;

    // Pinia
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    Vue.use(pinia);
  },
};
