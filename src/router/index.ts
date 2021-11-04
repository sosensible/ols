import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Courses from "../views/course/Courses.vue";
import Home from "../views/WelcomePage.vue";
import SignIn from "../views/SignIn.vue";
import MyCourses from "../views/course/MyCourses.vue";
import CourseDetails from "../views/course/Details.vue";
import CourseCreationPage from "../views/course/CourseCreationPage.vue";
import CourseUnit from "../views/course/Unit.vue";
import EditCourse from "../views/course/EditCourse.vue";
import EditLesson from "../views/course/EditLesson.vue";

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
    name: "CourseDetails",
    props: true,
    component: CourseDetails,
  },
  {
    path: "/course/:id/:unitSlug",
    name: "CourseUnit",
    props: true,
    component: CourseUnit,
  },
  {
    path: "/new-course",
    name: "CourseCreation",
    component: CourseCreationPage,
  },
  {
    path: "/editCourse/:id",
    name: "EditCourseLesson",
    component: EditCourse,
  },
  {
    path: "/editLesson/",
    name: "EditLesson",
    props: true,
    component: EditLesson,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
