<template>
  <div>
    <h1>This is the courses page</h1>
    <courseListingCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
    />
  </div>
</template>
<script lang="ts">
import courseListingCard from "../../components/CourseCard.vue";
import CourseService from "../../services/CourseService";
export default {
  components: {
    courseListingCard,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.$store.dispatch("createCourses");
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    courses() {
      return this.$store.state.courses;
    },
  },
};
</script>
