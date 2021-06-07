export default {
  addcount({ commit }, payload) {
    setTimeout(function() {
      commit("addcount", payload);
    }, 200);
  },
  gainame({ commit }, payload) {
    commit("changename", payload);
  },
};
