<template>
  <div>
    <p>{{ $props.lesson.name }}</p>
  </div>
</template>
<script>
export default {
  props: ["lesson"],
};
</script>
