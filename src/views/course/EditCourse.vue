<template>
  <div>
    <h2>Edit Course</h2>
    <h4>{{ course.name }}</h4>
    <p>{{ course.shortDescription }}</p>
    <p>${{ course.price }}</p>
    <!-- <p :v-for="unit in course.units">{{ unit.name }}</p> -->
    <button @click="addUnit">Add Unit</button>
    <div v-if="addingUnit">
      <div class="mb-3">
        <label for="Unit Name">Unit Name</label>
        <input id="unitName" class="form-control" />
      </div>
      <button>Save Unit</button>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      course: {},
      addingUnit: false,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    addUnit() {
      this.addingUnit = !this.addingUnit;
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    console.log(this.$store.state.selectedCourse);
    this.course = this.$store.state.selectedCourse;
  },
};
</script>
