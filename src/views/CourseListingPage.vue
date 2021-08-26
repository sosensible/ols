<template>
  <div>
    <h1>{{ course.name }}</h1>
    <h4>Description: {{ course.shortDescription }}</h4>
    <h3>Price: ${{ course.price }}</h3>
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
      })
      .catch((erroro) => {
        console.log("error for", erroro);
      });
  },
};
</script>
