<template>
  <div></div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      course: {
        name: "",
        shortDescription: "",
        price: "",
        creator: "",
        lessons: [],
        id: 0,
      },
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async submit() {
      // this.course.creator = this.$store.state.user.name;
      // this.$store.dispatch("createCourse", this.course);
      await axios.post("/api/courses/", {
        name: this.course.name,
        shortDescription: this.course.shortDescription,
        price: this.course.price,
      });
      // this.$router.push("my-courses");
    },
  },
  computed: {
    disbled() {
      return !(
        this.course.name != "" &&
        this.course.description != "" &&
        this.course.price != ""
      );
    },
  },
})
</script>