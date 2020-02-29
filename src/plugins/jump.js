import { saveMap } from "../mixins/keep";

export default {
  install(Vue) {
    Vue.prototype.$lcOpen = function(router) {
      if (router === this.$store.state.activeRouter) {
        return;
      }
      // 操纵vuex
      this.$store.commit("switchRouter", router);
      // 操纵vue-router
      this.$router.replace(this.$store.state.activeRouter);
    };

    Vue.prototype.$lcClose = function(router) {
      const saveKey = router;
      if (router === this.$store.state.activeRouter) {
        // 操纵vuex
        this.$store.commit("removeRouter", router);
        // 操纵vue-router
        this.$router.replace(this.$store.state.activeRouter).then(() => {
          // 操纵obj
          if (saveMap.has(saveKey)) {
            saveMap.delete(saveKey);
          }
        });
      } else {
        // 操纵vuex
        this.$store.commit("removeRouter", router);
        // 操纵obj
        if (saveMap.has(saveKey)) {
          saveMap.delete(saveKey);
        }
      }
    };

    Vue.prototype.$lcRefresh = function() {
      // 操纵obj
      const saveKey = this.$route.fullPath;
      this.$router.replace("/_").then(() => {
        if (saveMap.has(saveKey)) {
          saveMap.delete(saveKey);
        }
        this.$router.replace(this.$store.state.activeRouter);
      });
    };
  }
};
