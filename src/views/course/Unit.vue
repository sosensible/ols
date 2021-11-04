<template>
  <div>
    <button v-if="$props.canEdit" @click="show">Edit Unit</button>
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
        <button v-if="edit">✎</button>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["unitSlug", "canEdit"],
  data() {
    return {
      selectedUnit: {
        name: "",
        slug: "",
        lessons: [{ name: "" }],
      },
      edit: false,
      showEditButton: false,
    };
  },
  methods: {
    show() {
      this.edit = !this.edit;
    },
  },
  created() {
    const units = this.$store.state.selectedCourse.units
    units.forEach(unit => {
      if (unit.slug === this.$props.unitSlug) {
        this.selectedUnit = unit;
        console.log(this.selectedUnit);
      }
    });
  },
};
</script>
