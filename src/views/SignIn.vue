<template>
  <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
    <form class="card mt-5">
      <div class="card-header">
        <h1>Sign in</h1>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="name">Username</label>
          <input
            id="name"
            data-testid="nameField"
            v-model="user.name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="user.password"
            data-testid="passwordField"
            class="form-control"
          />
        </div>
        <button
          :disabled="false"
          @click.prevent="setUser"
          data-testid="sign-in-button"
        >
          Sign in
        </button>
      </div>
    </form>
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
  created() {
    //
    if (this.$store.state.courses.length == 0) {
      this.$store.dispatch("createCourses");
    }
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
