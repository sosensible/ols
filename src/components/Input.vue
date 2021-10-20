<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  emits: ["update:modelValue"],
  props: {
    label: String,
    id: String,
    modelValue: String,
  },
};
</script>
