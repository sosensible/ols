import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Courses from "../views/Courses.vue";
import Home from "../views/WelcomePage.vue";
import SignIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
