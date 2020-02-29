<template>
  <div id="app">
    <div
      id="contextmenu"
      v-if="css.display"
      :style="{ left: css.left + 'px', top: css.top + 'px' }"
    >
      <ol>
        <li @click="deleteLeft">删除左边</li>
        <li @click="deleteRight">删除右边</li>
        <li @click="deleteAllOther">删除其他</li>
      </ol>
    </div>
    <div id="nav" @contextmenu.prevent="muti">
      <el-tabs v-model="value" type="card" editable @tab-remove="tabRemove">
        <el-tab-pane
          v-for="item in routers"
          :key="item"
          :label="item"
          :name="item"
        >
        </el-tab-pane>
      </el-tabs>
      <button @click="refresh">refresh</button> |
      <button @click="goTo('/')">Home</button> |
      <button @click="goTo('/about')">About</button> |
      <button @click="goTo('/other')">Other</button> |
      <button @click="goTo('/fir')">fir</button> |
      <button @click="goTo('/sec')">sec</button> |
      <button @click="goTo('/thir')">thir</button> |
      <button @click="goTo('/four')">four</button> |
      <button @click="goTo('/five')">five</button> |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      css: {
        display: false,
        left: 0,
        top: 0
      }
    };
  },
  computed: {
    value: {
      get() {
        return this.$store.state.activeRouter;
      },
      set(router) {
        this.$lcOpen(router);
      }
    },
    routers() {
      return this.$store.state.routers;
    }
  },
  methods: {
    refresh() {
      this.$lcRefresh();
    },
    goTo(router) {
      this.$lcOpen(router);
    },
    tabRemove(name) {
      this.$lcClose(name);
    },
    muti(event) {
      this.css.left = event.pageX;
      this.css.top = event.pageY;
      this.css.display = true;
    },
    deleteLeft() {
      const index = this.routers.indexOf(this.value);
      while (index !== this.routers.length - 1) {
        this.$lcClose(this.routers[index + 1]);
      }
      this.css.display = false;
    },
    deleteRight() {
      while (this.routers.indexOf(this.value) !== 0) {
        this.$lcClose(this.routers[0]);
      }
      this.css.display = false;
    },
    deleteAllOther() {
      this.deleteLeft();
      this.deleteRight();
      this.css.display = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#contextmenu {
  position: fixed;
  height: 300px;
  width: 200px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.button-exact-active {
      color: #42b983;
    }
  }
}
</style>
