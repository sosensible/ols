<template>
  <form>
    <h1>Create New Course</h1>
    <label for="Name">Name</label>
    <input id="Name" v-model="course.name" />
    <label for="Description">Description</label>
    <input id="Description" v-model="course.shortDescription" />
    <label for="Price">Price</label>
    <input id="Price" v-model="course.price" type="number" />
    <button :disabled="disbled" @click.prevent="submit">Save Course</button>
  </form>
</template>
<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    submit() {
      this.course.creator = this.$store.state.user.name;
      this.$store.dispatch("createCourse", this.course);
      this.$router.push("my-courses");
    },
  },
  computed: {
    disbled() {
      return !(this.course.name != "" && this.course.description != "");
    },
  },
};
</script>
