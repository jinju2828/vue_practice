import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "@/store/user/userStore";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
        paths: ['user'],
      // vuex-persistedstate를 이용해 vuex를 localstorage로 넣어서 사용 가능하다. 새로고침 혹은 브라우저 탭을 여러개 띄워도 공유된다.
    })
  ],
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
