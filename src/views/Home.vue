<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import keep from "../mixins/keep";

export default {
  mixins: [keep],
  name: "Home",
  components: {
    HelloWorld
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
