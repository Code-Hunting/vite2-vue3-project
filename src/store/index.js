import { createStore } from "vuex";

const store = createStore({
  state: {
    pageInfo: {
      title: "404 Page NO Found",
      desc: "Oh Something Wrong",
    },
  },
  mutations: {
    setPageInfo(state, info) {
      state.pageInfo = info || {};
    },
  },
  actions: {
    asyncGetPageInfo({ commit }) {
      setTimeout(() => {
        commit("setPageInfo", {
          title: "Action Page NO Found",
          desc: "Change From Action",
        });
      }, 1000);
    },
  },
  getters: {
    getPageInfo(state) {
      return state.pageInfo;
    },
  },
});

export default store;
