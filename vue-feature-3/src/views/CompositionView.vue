<template>
  <div>
    <div class="name">{{ name }}</div>
    <button @click="updateName">Click</button>
  </div>

  <br>
  Vue 3에서는 watchEffect를 사용하기 위해 반드시 import 구문을 사용해야 합니다.<br>
  컴포지션 API의 핵심은 setup() 이다.<br>
  데이터와 메소드가 한 곳 에서 정의되어 관리된다.<br>

  const doubleCount = computed(() => count.value * 2);<br>
  watchEffect(() => { alert(`ddd ${name.value}`); });<br>
  vue 2의 computed나 watch의 기능을 Composition API에서 따로 분리해서 사용할 수 있다.<br>
  좀 더 큰 범위가 아니라 작은범위로 작성이 가능하고 기능의 모듈화가 가능해지며 코드를 재사용할 수 있다.<br>

  setup() 바깥에 있는 변수는 사용할 수 없다.<br>
  watchEffect는 watch와 다르게 초기 변경값부터 실행되는 기능이다.
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const name = ref("Summer");
    let name2 = "stir";
    watchEffect(() => {
      alert(`ddd ${name.value}`); // watchEffect 안에서 사용된 값이 변경이 일어나면 이 함수가 실행된다.
    });
    watchEffect(() => {
      alert(`ddd ${name2}`); // 리액티브 값 뿐만 아니라 모든 값에 대한 변경을 확인한다. 리액티브 값은 그냥 단순히 HTML 태그와 양방향 하기 위함이다.
    });
    const updateName = () => {
      name.value = "Yeonsu"; // const인데 변경되네
      name2 = "jun";
    };
    return {
      name, name2,
      updateName,
    };
  },
};
</script>