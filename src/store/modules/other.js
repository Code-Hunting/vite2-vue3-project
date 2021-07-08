// initial state
const state = {
  pageInfo: {
    title: "404 Page NO Found",
    desc: "Oh Something Wrong",
  },
};

// getters
const getters = {
  getPageInfo(state) {
    return state.pageInfo;
  },
};

// actions
const actions = {
  asyncGetPageInfo({ commit }) {
    setTimeout(() => {
      commit("setPageInfo", {
        title: "Action Page NO Found",
        desc: "Change From Action",
      });
    }, 1000);
  },
};

// mutations
const mutations = {
  setPageInfo(state, info) {
    state.pageInfo = info || {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
