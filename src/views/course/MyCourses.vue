<template>
  <div>
    <h2>This page is for courses that were created by this user</h2>
    <h3>name: {{ user.name }}</h3>
    <div class="cards">
      <courseListingCard
        v-for="course in user.courses"
        :key="course.id"
        :course="course"
        class="card"
      />
    </div>
    <router-link to="/new-course">
      <button class="m-5" data-testid="newCourseButton">Create New Course</button>
    </router-link>
  </div>
</template>
<script>
import courseListingCard from "../../components/CourseCard.vue";
export default {
  components: {
    courseListingCard,
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
