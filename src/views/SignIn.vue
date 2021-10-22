<template>
  <div>
    <h1>Sign in</h1>
    <label for="name" class="form-label">Username</label>
    <input id="name" v-model="user.name" class="form-control" />
    <label for="password" class="form-label">Password</label>
    <input id="password" v-model="user.password" class="form-control" />
    <button :disabled="false" @click.prevent="setUser">Sign in</button>
  </div>
</template>
<script lang="ts">
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      user: {
        password: "",
        name: "",
        courses: "",
      },
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setUser() {
      const usersCourses = [];
      if (this.$store.state.courses.length == 0) {
        this.$store.dispatch("createCourses");
      } else {
        for (let i = 0; i < this.$store.state.courses.length; i++) {
          if (this.$store.state.courses[i].creator == this.user.name) {
            usersCourses.push(this.$store.state.courses[i]);
          }
        }
        this.user.courses = usersCourses;
        this.$store.dispatch("createUser", this.user);
        this.$router.push("/my-courses");
      }
    },
  },
};
</script>
