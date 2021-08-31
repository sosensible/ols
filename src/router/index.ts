import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Courses from "../views/Courses.vue";
import Home from "../views/WelcomePage.vue";
import SignIn from "../views/SignIn.vue";
import MyCourses from "../views/MyCourses.vue";
import CourseListingPage from "../views/CourseListingPage.vue";
import CourseCreationPage from "../views/CourseCreationPage.vue";
import CourseLesson from "../views/CourseLesson.vue";

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
  {
    path: "/my-courses",
    name: "My Courses",
    component: MyCourses,
  },
  {
    path: "/course/:id",
    name: "CoursePage",
    props: true,
    component: CourseListingPage,
  },
  {
    path: "/lesson/:name",
    name: "LessonPage",
    props: true,
    component: CourseLesson,
  },
  {
    path: "/new-course",
    name: "CourseCreation",
    component: CourseCreationPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
