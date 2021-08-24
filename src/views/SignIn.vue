<template>
  <div>
    <h1>Sign in</h1>
    <signIn />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import signIn from "../components/signIn.vue"

@Component({
  components: {
    signIn
  }
})
export default class Home extends Vue {}
</script>