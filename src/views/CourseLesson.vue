<template>
  <div class=".lessonContent">
    <p class=".lessonName">
      This Lessons Name: <em>{{ this.name }}</em>
    </p>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>
