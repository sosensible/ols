/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div>
    <h1>{{ course.name }}</h1>
    <h4>Description: {{ course.shortDescription }}</h4>
    <h3>Price: ${{ course.price }}</h3>
    <router-link :to="{ name: 'EditCourseLesson', params: { id: course.id } }">
      <button v-if="editButton">Add Unit</button>
    </router-link>
    <div v-for="unit in course.units" :key="unit.name">
      <button @click.prevent="submit(unit)">{{ unit.name }}</button>
    </div>
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
