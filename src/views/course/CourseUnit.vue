<template>
  <div>
    <button v-if="edit">Edit Unit</button>
    <h2>{{ selectedUnit.name }}</h2>
    <div v-if="edit">
      <div class="form-floating mb-3">
        <input
          id="unitName"
          class="form-control"
          type="text"
          v-model="selectedUnit.name"
        />
        <label for="unitName">Unit Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          id="unitSlug"
          class="form-control"
          type="text"
          v-model="selectedUnit.slug"
        />
        <label for="unitSlug">Unit Slug</label>
      </div>
    </div>
    <h4>Lessons</h4>
    <button v-if="edit">Add Lesson</button>
    <ul>
      <div v-for="lesson in selectedUnit.lessons" :key="lesson.name">
        <li>
          {{ lesson.name }}
        </li>
        <button>✎</button>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["unit"],
  data() {
    return {
      selectedUnit: {
        name: "",
        slug: "",
        lessons: [{ name: "" }],
      },
      edit: false,
    };
  },
  created() {
    this.selectedUnit = this.$props.unit;
    const course = this.$store.state.selectedCourse;
    const user = this.$store.state.user;
    if (course.creator === user.name) {
      this.edit = true;
    }
  },
};
</script>
