import state from "./userState.js";
import mutations from "./userMutations.js";
import actions from "./userActions.js";
//import getters from "./userGetters.js";

export default {
    namespaced: true, //createNamespacedHelpers("user"); nameSpaced 허용
    state,
    mutations,
    actions
    /*getters*/
};
