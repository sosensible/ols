<template>
  <div>
    <h1>This is the courses page</h1>
    <courseListingCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      class="card"
    />
  </div>
</template>
<script lang="ts">
import courseListingCard from "../../components/CourseCard.vue";
export default {
  components: {
    courseListingCard,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    if (this.$store.state.courses.length == 0) {
      this.$store.dispatch("createCourses");
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    courses() {
      const courses = this.$store.state.courses;
      return courses;
    },
  },
};
</script>
<style>
.card {
  padding: 10px;
  margin: 23px;
  display: flex;
  flex-flow: column;
}
</style>
