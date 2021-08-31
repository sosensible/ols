<template>
  <div>
    <h1>{{ course.name }}</h1>
    <h4>Description: {{ course.shortDescription }}</h4>
    <h3>Price: ${{ course.price }}</h3>
    <!-- <p :v-for="lesson in course.lessons">this is a {{ lesson.name }}</p> -->
    <div class="lessonArray">
      <p v-for="lesson in course.lessons" :key="lesson.name">
        {{ lesson.name }}
      </p>
    </div>
  </div>
</template>
<script>
import CourseService from "../services/CourseService";
export default {
  props: ["id"],
  data() {
    return {
      course: null,
    };
  },
  created() {
    CourseService.getCourses()
      .then(({ data }) => {
        this.course = data.courses[this.id - 1];
        console.log("here");
      })
      .catch((erroro) => {
        console.log("error for", erroro);
      });
  },
};
</script>
