<template>
  <div>
    <h3><em>Name:</em> {{ course.name }}</h3>
    <p>Description: {{ course.shortDescription }}</p>
    <h4>Price: {{ course.price }}</h4>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      course: {
        name: "Course Name",
        shortDescription: "Short Course Description",
        price: 30,
        id: 1,
      },
    };
  },
});
</script>
