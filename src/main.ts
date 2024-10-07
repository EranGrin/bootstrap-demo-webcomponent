import app from "./App.vue";
import { pluginsWrapper } from "./plugins";
import { createWebComponent } from "vue-web-component-wrapper";
import customStyles from "./style.scss?inline";

import {
    defineCustomElement as VueDefineCustomElement,
    h,
    createApp,
    getCurrentInstance,
} from "vue";

createWebComponent({
  rootComponent: app,
  elementName: "testing-web-component",
  plugins: pluginsWrapper,
  cssFrameworkStyles: customStyles,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  disableShadowDOM: false,
});
