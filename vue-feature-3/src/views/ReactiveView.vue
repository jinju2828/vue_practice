<template>
  <div>
    <div class="name">{{ name }}</div>
    <button @click="updateName">Click</button>
  </div>

  <br>
  reactive reference 리액티브 참조는 vue의 반응형 페이지를 지원하기 위해 등장한 개념이다.<br>
  ref를 쓰면 v-model 같은거 쓸 필요없이 바로 위에 name 값이 반영된다.<br>
  vue 2에서는 data() 안에 있던 변수들은 v-model을 걸어줘야 양방향 데이터 바인딩이 걸렸는데 vue 3에서는 reactive로도 된다는 의미다<br>
  ref()는 어떤 변수든 사용 가능하다.<br>
  reactive({})는 객체, 맵, 배열과 같은 데이터만 사용할 수 있다.<br>
  ref가 모든 변수를 다 사용할 수 있어서 ref만 쓰면 되지 않냐 생각할 수 있는데 객체 내부의 속성까지는 reactive하게 파악하지 못하므로 객체일ㄷ 떈 reactive를 써야한다.<br>
  Vue 3에서는 ref를 사용하기 위해 반드시 import 구문을 사용해야 합니다.<br>


</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("Summer");
    const updateName = () => {
      name.value = "Yeonsu"; // const인데 변경되네
    };
    return {
      name,
      updateName,
    };
  },
};
</script>