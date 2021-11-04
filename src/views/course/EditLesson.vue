<template>
  <div>
    <p>Edit Lesson</p>
    <p>{{ $props.lesson }}</p>
  </div>
</template>
<script>
export default {
  props: ["lesson"],
};
</script>
