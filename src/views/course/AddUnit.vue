<template>
  <div>
    <h2>Add Unit</h2>
    <p v-for="unit in course.units" :key="unit.name">{{ unit.name }}</p>
    <div class="form-floating mb-3">
      <input
        id="unitName"
        class="form-control"
        type="text"
        v-model="unit.name"
        data-testid="unitNameField"
      />
      <label for="unitName">Unit Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="unitSlug"
        class="form-control"
        type="text"
        v-model="unit.slug"
        data-testid="unitSlugField"
      />
      <label for="unitSlug">Unit Slug</label>
    </div>
    <button @click="saveUnit" data-testid="saveButton">Save Unit</button>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      course: {},
      unit: {
        name: "",
        slug: "",
        lessons: [],
      },
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    saveUnit() {
      if (this.unit.name != "" && this.unit.slug != "") {
        this.course.units.push(this.unit);
        this.$store.dispatch("updateCourse", this.course);
        this.$router.push("/course/" + this.course.id);
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.course = this.$store.state.selectedCourse;
  },
};
</script>
