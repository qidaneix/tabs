<template>
  <div class="about">
    <h1>This is an {{ value }} page</h1>
    <input type="text" v-model="value" />
  </div>
</template>

<script>
import keep from "../mixins/keep";

export default {
  mixins: [keep],
  data() {
    return {
      value: "Second"
    };
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
  },
  methods: {
    getData() {}
  }
};
</script>
