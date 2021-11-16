import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createServer, Response } from "miragejs";

if (window.Cypress) {
  const methods = ["get", "put", "patch", "post", "delete"];

  createServer({
    environment: "test",
    routes() {
      for (const domain of ["/"]) {
        for (const method of methods) {
          this[method](`${domain}*`, async (schema, request) => {
            const [status, headers, body] = await window.handleFromCypress(
              request
            );
            return new Response(status, headers, body);
          });
        }
      }
    },
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
