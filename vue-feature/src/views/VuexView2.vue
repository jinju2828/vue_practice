<template>
  <div>
    <h2>About</h2>
    <button @click="increment">증가</button>
    <p>{{ count }}</p>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const userHelper = createNamespacedHelpers("user");
export default {
  computed: {
    ...userHelper.mapState({ // vuex에 있는 mapState라는 헬퍼 함수는 userStore.js에 있는 export default의 state와 매칭된다.
      count: state => state.count
    })
  },
  methods: {
    ...userHelper.mapActions([
        'increment'
    ])
  },
};
</script>