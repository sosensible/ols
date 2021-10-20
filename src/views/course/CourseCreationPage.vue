<template>
  <form>
    <h1>Create New Course</h1>
    <label for="Name">Name</label>
    <input id="Name" v-model="course.name" />
    <label for="Description">Description</label>
    <input id="Description" v-model="course.description" />
    <button :disabled="disbled" @click.prevent="submit">Save Course</button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      course: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    submit() {
      this.$store.dispatch("createCourse", this.course);
    },
  },
  computed: {
    disbled() {
      return !(this.course.name != "" && this.course.description != "");
    },
  },
};
</script>
