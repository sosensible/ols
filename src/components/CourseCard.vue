<template>
  <button @click.prevent="submit">
    <div>
      <h3><em>Name:</em> {{ course.name }}</h3>
      <p>Description: {{ course.shortDescription }}</p>
      <h4>Price: ${{ course.price }}</h4>
    </div>
  </button>
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
  methods: {
    //
    submit() {
      this.$store.dispatch("createCourseId", this.course.id);
      console.log(this.$store.state.selectedCourseId);
      this.$router.push("/course/" + this.course.id);
    },
  },
});
</script>
