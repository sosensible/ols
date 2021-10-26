<template>
  <button @click.prevent="submit">
    <div class="container p-5">
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
    // eslint-disable-next-line vue/require-prop-type-constructor
  },
  methods: {
    submit() {
      this.$store.dispatch("createCurrentCourse", this.course);
      this.$router.push("/course/" + this.course.id);
    },
  },
});
</script>
