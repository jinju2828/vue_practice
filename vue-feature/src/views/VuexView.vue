<template>
  <div>
    <h2>About</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">증가</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'; // mapGetters, mapState는 헬퍼 함수로 지정된 이름이다.
export default {
  computed: {
    count() { // count 직접가져오기
      return this.$store.state.count;
    },
    ...mapState(['count']), // count는 내가 임의로 설정한 변수가 아니고 store에 있는 값을 사용해야한다.
    ...mapGetters(['doubleCount']) // doubleCount는 내가 임의로 설정한 변수가 아니고 store에 있는 값을 사용해야한다.
  },
  methods: {
    increment() {
      this.$store.dispatch('increment'); //Vuex의 Actions를 먼저 실행시킨다.
    },
  },
};
</script>