<template>
  <div>
    <h1>Sign in</h1>
    <signIn />
  </div>
</template>
<script lang="ts">
import signIn from "../components/signIn.vue";
export default {
  components: {
    signIn,
  },
  data() {
    return {
      name: "George",
    };
  },
  methods: {
    signIn() {
      return axios.post("/api/users" + this.name)
    },
  },
};
</script>
