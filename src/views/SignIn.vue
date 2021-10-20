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
      },
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setUser() {
      console.log(this.user);
      this.$store.dispatch("createUser", this.user);
      this.$router.push("/my-courses");
    },
  },
};
</script>
