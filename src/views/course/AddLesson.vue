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
      lessons: [],
    };
  },
  methods: {
    addLesson() {
      this.unit.lessons.push(this.lesson);
      if (this.lesson.name != "") {
        this.$store.dispatch("updateUnit", this.unit);
        let editButton = false;
        const user = this.$store.state.user;
        if (this.$store.state.selectedCourse.creator === user.name) {
          editButton = true;
        }
        this.$router.push({
          name: "CourseUnit",
          params: {
            id: this.$store.state.selectedCourse.id,
            unitSlug: this.unit.slug,
            canEdit: editButton,
          },
        });
      }
    },
  },
});
</script>
