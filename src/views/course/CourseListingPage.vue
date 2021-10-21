/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div>
    <h1>{{ course.name }}</h1>
    <h4>Description: {{ course.shortDescription }}</h4>
    <h3>Price: ${{ course.price }}</h3>
    <!-- <p :v-for="lesson in course.lessons">this is a {{ lesson.name }}</p> -->
    <div
      class="lessonArray"
      v-for="lesson in course.lessons"
      :key="lesson.name"
    >
      <router-link :to="{ name: 'LessonPage', params: { name: lesson.slug } }">
        <p>
          {{ lesson.name }}
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import CourseService from "../../services/CourseService";
export default {
  props: ["id"],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      course: null,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.course = this.$store.state.selectedCourse;
  },
};
</script>
