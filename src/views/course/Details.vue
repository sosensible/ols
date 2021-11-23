/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div>
    <button v-if="editButton" @click="edit" data-testid="editButton">
      Edit Course
    </button>
    <h1>{{ course.name }}</h1>
    <div class="form-floating mb-3" v-if="editingMode">
      <input
        id="courseName"
        class="form-control"
        type="text"
        v-model="course.name"
        data-testid="Course Name"
      />
      <label for="courseName">Name</label>
    </div>
    <h4>Description: {{ course.shortDescription }}</h4>
    <div class="form-floating mb-3" v-if="editingMode">
      <input
        id="courseshortDescription"
        class="form-control"
        type="text"
        v-model="course.shortDescription"
        data-testid="Course shortDescription"
      />
      <label for="courseshortDescription">shortDescription</label>
    </div>
    <h3>Price: ${{ course.price }}</h3>
    <div class="form-floating mb-3" v-if="editingMode">
      <input
        id="courseprice"
        class="form-control"
        type="text"
        v-model="course.price"
        data-testid="Course Price"
      />
      <label for="courseprice">Price</label>
    </div>
    <router-link
      :to="{ name: 'EditCourseLesson', params: { id: course.id } }"
      v-if="!editingMode"
    >
      <button v-if="editButton" data-testid="addUnitButton">Add Unit</button>
    </router-link>
    <div v-for="unit in course.units" :key="unit.name">
      <button @click.prevent="submit(unit)" v-if="!editingMode">
        {{ unit.name }}
      </button>
    </div>
    <button v-if="editingMode" data-testid="saveChanges" @click="save">
      Save Changes
    </button>
  </div>
</template>
<script>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import CourseService from "../../services/CourseService";
export default {
  props: ["id"],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      course: null,
      editButton: false,
      editingMode: false,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.course = this.$store.state.selectedCourse;
    const user = this.$store.state.user;
    if (this.course.creator === user.name) {
      this.editButton = true;
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    save() {
      this.editingMode = false;
      this.$store.dispatch("updateCourse", this.course);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    edit() {
      this.editingMode = !this.editingMode;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    submit(unit) {
      this.$router.push({
        name: "CourseUnit",
        params: {
          id: this.course.id,
          unitSlug: unit.slug,
          canEdit: this.editButton,
        },
      });
    },
  },
};
</script>
