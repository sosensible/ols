<template>
  <div>
    <h1>This is the courses page</h1>
    <div class="cards">
      <courseListingCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
        class="card"
      />
    </div>
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
.cards {
  display: grid;
  margin: 30px;
  grid-template-columns: auto auto auto auto auto auto auto;
}
.card {
  margin: 30px;
  margin-top: 15px;
  margin-bottom: 10px;
  grid-column: 4;
}
</style>
