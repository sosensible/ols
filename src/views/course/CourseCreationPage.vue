<template>
  <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
    <form>
      <div class="card-header">
        <h1>Create New Course</h1>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="Name" class="form-label">Name</label>
          <input id="Name" v-model="course.name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="Description" class="form-label">Description</label>
          <input
            id="Description"
            v-model="course.shortDescription"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="Price" class="form-label">Price</label>
          <input
            id="Price"
            v-model="course.price"
            type="number"
            class="form-control"
          />
        </div>
        <button :disabled="disbled" @click.prevent="submit">Save Course</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
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
      this.course.creator = this.$store.state.user.name;
      this.$store.dispatch("createCourse", this.course);
      // await axios.post("/api/courses/", {
      //   name: this.course.name,
      //   shortDescription: this.course.shortDescription,
      //   price: this.course.price,
      // });
      this.$router.push("my-courses");
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
