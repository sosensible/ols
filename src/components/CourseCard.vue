<template>
  <router-link :to="{ name: 'CoursePage', params: { id: course.id } }">
    <div>
      <h3><em>Name:</em> {{ course.name }}</h3>
      <p>Description: {{ course.shortDescription }}</p>
      <h4>Price: ${{ course.price }}</h4>
    </div>
  </router-link>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
});
</script>
