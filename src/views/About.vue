<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import keep from "../mixins/keep";

export default {
  mixins: [keep],
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
  },
  methods: {
    getData() {}
  }
};
</script>
