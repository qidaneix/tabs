import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeRouter: "/",
    routers: ["/"]
  },
  mutations: {
    switchRouter(state, router) {
      if (state.routers.includes(router)) {
        state.activeRouter = router;
      } else {
        state.routers.push(router);
        state.activeRouter = router;
      }
    },
    removeRouter(state, router) {
      const index = state.routers.indexOf(router);
      if (index !== -1) {
        if (state.routers.length === 1) {
          // 只有一个
          state.routers.splice(0, 1, "/");
          state.activeRouter = "/";
        } else if (router === state.activeRouter) {
          // 当前激活
          if (index === state.routers.length - 1) {
            // 最后一个
            state.activeRouter = state.routers[index - 1];
          } else {
            state.activeRouter = state.routers[index + 1];
          }
          state.routers.splice(index, 1);
        } else {
          // 非激活
          state.routers.splice(index, 1);
        }
      }
    }
  },
  actions: {},
  modules: {}
});
