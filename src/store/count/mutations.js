export default {
  addcount(state, payload) {
    state.count += payload;
  },
  changename(state, payload) {
    state.nickname = payload.name;
  },
};
