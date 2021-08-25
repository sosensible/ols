<template>
  <div>
    <h1>This is the courses page</h1>
    <router-link to="/courses/0 ">
      <courseListingCard
        v-for="course in courses"
        :key="course.cid"
        :course="course"
      />
    </router-link>
  </div>
</template>
<script lang="ts">
import courseListingCard from "../components/CourseCard.vue";
import CourseService from "../services/CourseService";
export default {
  components: {
    courseListingCard,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      courses: [],
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    CourseService.getCourses()
      .then(({ data }) => {
        this.courses = data.courses;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
