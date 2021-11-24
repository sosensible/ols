<template>
  <div>
    <div>
      <button @click="backToCourse">Back to course</button>
    </div>
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
    <button v-if="edit" @click="add">Add Lesson</button>
    <ul>
      <div v-for="lesson in selectedUnit.lessons" :key="lesson.name">
        <li>
          <button @click="submit(lesson)">
            {{ lesson.name }}
          </button>
        </li>
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
    };
  },
  methods: {
    show() {
      this.edit = !this.edit;
    },
    add() {
      this.$router.push({
        name: "AddLesson",
        params: {
          id: this.$store.state.selectedCourse.id,
          unitSlug: this.selectedUnit.slug,
          unit: this.selectedUnit,
        },
      });
    },
    backToCourse() {
      this.$router.push({
        name: "CourseDetails",
        params: { id: this.$store.state.selectedCourse.id },
      });
    },
    submit(lesson) {
      const courseId = this.$store.state.selectedCourse.id
      const unitSlug = this.$props.unitSlug
      const lessonSlug =  lesson.slug
      this.$router.push({
        name: "CourseLesson",
        params: {
          id: courseId,
          unitSlug: unitSlug,
          lessonSlug: lessonSlug,
          lesson: lesson,
          canEdit: this.$props.canEdit,
        },
      });
    },
  },
  created() {
    this.$store.state.selectedCourse.units.forEach(unit => {
      if (unit.slug === this.$props.unitSlug) {
        this.selectedUnit = unit;
      }
    });
  },
};
</script>
