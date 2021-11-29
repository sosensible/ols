<template>
  <div>
    <button @click="backToCourse" >Back To Course</button>
    <button @click="$router.back()">Back To Unit</button>
    <button v-if="canEdit" @click="changeEdit">Edit Lesson</button>
    <h2>{{ lesson.name }}</h2>
    <p>{{ lesson.content }}</p>
    <div class="form-floating mb-3" v-if="editable">
      <input
        id="lessonName"
        class="form-control"
        type="text"
        v-model="lesson.name"
        data-testid="nameInput"
      />
      <label for="lessonName">Name</label>
    </div>
    <div class="form-floating mb-3" v-if="editable">
      <input
        id="lessonSlug"
        class="form-control"
        type="text"
        v-model="lesson.slug"
        data-testid="slugInput"
      />
      <label for="lessonSlug">Slug</label>
    </div>
    <div class="form-floating mb-3" v-if="editable">
      <input
        id="lessonContent"
        class="form-control"
        type="text"
        v-model="lesson.content"
        data-testid="content"
      />
      <label for="lessonContent">Lesson Content</label>
    </div>
  </div>
</template>
<script>
export default {
  props: ["lesson", "canEdit"],
  data() {
    return {
      editable: false,
    };
  },
  methods: {
    changeEdit() {
      this.editable = !this.editable
    },
    backToCourse() {
      this.$router.push({
        name: "CourseDetails",
        params: { id: this.$store.state.selectedCourse.id },
      });
    },
  },
};
</script>
