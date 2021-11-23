<template>
  <div>
    <h2>Add Lesson</h2>
    <p v-for="lesson in unit.lessons" :key="lesson.name">{{ lesson.name }}</p>
    <div class="form-floating mb-3">
      <input
        id="lessonName"
        class="form-control"
        type="text"
        v-model="lesson.name"
        data-testid="nameInput"
      />
      <label for="lessonName">Lesson Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="lessonSlug"
        class="form-control"
        type="text"
        v-model="lesson.slug"
        data-testid="slugInput"
      />
      <label for="lessonSlug">Lesson Slug</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="lessonContent"
        class="form-control"
        type="text"
        v-model="lesson.content"
        data-testid="contentInput"
      />
      <label for="lessonContent">Lesson Content</label>
    </div>
    <button @click="addLesson" data-testid="saveButton">Save Lesson</button>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: ["unit"],
  data() {
    return {
      lesson: {
        name: "",
        slug: "",
        content: "",
      },
      course: null,
      lessons: [],
    };
  },
  methods: {
    addLesson() {
      if (this.lesson.name != "") {
        for (let int in this.course.units) {
          if (this.course.units[int].name === this.unit.name) {
            this.course.units[int].lessons.push(this.lesson);
            this.$store.dispatch("updateCourse", this.course);
            const user = this.$store.state.user;
            let editButton = false;
            if (this.course.creator === user.name) {
              editButton = true;
            }
            this.$router.push({
              name: "CourseUnit",
              params: {
                id: this.course.id,
                unitSlug: this.unit.slug,
                canEdit: editButton,
              },
            });
          }
        }
      }
    },
  },
  created() {
    this.course = this.$store.state.selectedCourse;
  },
});
</script>
