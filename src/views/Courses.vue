<template>
  <div>
    <h1>This is the courses page</h1>
    <courseListingCard />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import courseListingCard from "../components/courseListingCard.vue";

@Component({
  components: {
    courseListingCard,
  },
})
export default class Home extends Vue {}
</script>
