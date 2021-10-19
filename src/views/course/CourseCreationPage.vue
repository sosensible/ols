<template>
  <div>
    <h1>Create New Course</h1>
    <label for="Name">Name</label>
    <input id="Name" v-model="course.name" />
    <label for="Description">Description</label>
    <input id="Description" v-model="course.description" />
    <button :disabled="disbled">Save Course</button>
  </div>
</template>
<script>
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
  computed: {
    disbled() {
      return !(this.course.name != "" && this.course.description != "");
    },
  },
};
</script>
