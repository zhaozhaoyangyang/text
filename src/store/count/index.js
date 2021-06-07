import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true, //外面的目录就是命名空间  count就是该状态的命名空间
  state,
  getters,
  mutations,
  actions,
};
