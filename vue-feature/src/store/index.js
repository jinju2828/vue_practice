import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "@/store/user/userStore";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrement(context) {
      context.commit('decrement');
    },
  },
  modules: {
    user: userStore
  }
})
