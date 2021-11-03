<template>
  <div>
    <h2>{{ $props.unit.name }}</h2>
    <h4>Lessons</h4>
    <ul>
      <li v-for="lesson in selectedUnit.lessons" :key="lesson.name">
        {{ lesson.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["unit"],
  data() {
    return {
      selectedUnit: {},
    };
  },
  created() {
    this.selectedUnit = this.$props.unit;
  },
};
</script>
