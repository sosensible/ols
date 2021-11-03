<template>
  <div>
    <p>{{ $props.unit.name }}</p>
  </div>
</template>
<script>
export default {
  props: ["unit"],
};
</script>
