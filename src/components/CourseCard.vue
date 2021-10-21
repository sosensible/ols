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
    submit() {
      this.$store.dispatch("createCurrentCourse", this.course);
      console.log(this.$store.state.selectedCourse, "curre t course");
      this.$router.push("/course/" + this.course.id);
    },
  },
});
</script>
