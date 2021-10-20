<template>
  <div>
    <h1>This page is for courses that were created by this user</h1>
    <h3>name: {{ user.name }}</h3>
    <router-link to="/new-course">
      <button>Create New Course</button>
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
