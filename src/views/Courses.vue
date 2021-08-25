<template>
  <div>
    <h1>This is the courses page</h1>
    <router-link to="/courseId">
      <courseListingCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </router-link>
  </div>
</template>
<script lang="ts">
import courseListingCard from "../components/CourseCard.vue";
export default {
  components: {
    courseListingCard,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      courses: [
        {
          name: "HTML",
          shortDescription: "Short description of the html course",
          price: 30,
          id: 1,
        },
      ],
    };
  },
};
</script>
