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
      />
      <label for="lessonName">Lesson Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="lessonSlug"
        class="form-control"
        type="text"
        v-model="lesson.slug"
      />
      <label for="lessonSlug">Lesson Slug</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="lessonContent"
        class="form-control"
        type="text"
        v-model="lesson.content"
      />
      <label for="lessonContent">Lesson Content</label>
    </div>
    <button @click="addLesson">Save Lesson</button>
  </div>
</template>
<script>
export default {
  props: ["unit"],
  data() {
    return {
      lesson: {
        name: "",
        slug: "",
        content: "",
      },
    };
  },
  methods: {
    addLesson() {
      console.log(this.lesson);
    },
  },
};
</script>
