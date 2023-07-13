<template>
  <div>
    <h2>About</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">증가</button>
    <button @click="zzz">짜잔</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>

    왜 vuex는 dispatch(actions)를 하고 commit 메소드를 통해 mutations가 실행될까?
    바로 mutation으로 변경하면 될 일인데 말이다.
    왜냐면 dispatch를 통해 액션을 실행하고, 액션 내에서 필요한 비동기 작업이나 비즈니스 로직을 수행한 뒤에 commit을 통해 mutations를 호출하여 상태를 변경하는 패턴은 일반적인 Vuex의 동작 방식입니다.
    단일 소스 진실(Single Source of Truth)
    Vuex는 상태 변이를 중앙 집중적으로 관리하는 패턴을 따릅니다.
    actions는 애플리케이션의 비즈니스 로직이나 비동기 작업을 처리하고, 그 결과로 mutations를 호출하여 실제 상태를 변경합니다.
    이로써 애플리케이션의 상태는 일관되고 예측 가능한 방식으로 변경됩니다.
    단일 소스 진실(SSOT)라는게 그러니까 action으로 동작을 시키고 값 변화는 mutations으로 분리시킨다라는 뜻이다.

    비동기 작업 처리
    actions는 비동기 작업을 처리하는 데 사용됩니다.
    예를 들어, API 호출, 서버와의 통신, 비동기 데이터 가져오기 등과 같은 작업을 수행할 수 있습니다.
    비동기 작업은 시간이 걸리고 완료되는 동안 애플리케이션의 다른 부분이 계속 실행되어야 합니다.
    actions를 사용하여 비동기 작업을 분리하고, 작업이 완료되면 mutations를 호출하여 상태를 업데이트할 수 있습니다.

    DevTools 지원
    Vuex는 Vue 개발자 도구(DevTools)와 통합되어 있습니다.
    actions와 mutations을 통해 상태 변이를 추적하고, 시간 여행 디버깅(Time Travel Debugging) 및 상태 스냅샷(State Snapshot)과 같은 강력한 개발자 도구 기능을 활용할 수 있습니다.
    일반 변수는 시간 여행 디버깅이 불가능하다.
    이러한 기능은 애플리케이션의 상태 관리와 디버깅을 더욱 용이하게 만듭니다.
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'; // mapGetters, mapState는 헬퍼 함수로 지정된 이름이다.
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState(['count']), // count는 내가 임의로 설정한 변수가 아니고 store에 있는 값을 사용해야한다.
    // mapState는 보통 computed와 사용한다. 캐싱 및 데이터 바인딩을 위해서다.
    ...mapGetters(['doubleCount']) // doubleCount는 내가 임의로 설정한 변수가 아니고 store에 있는 값을 사용해야한다.
  },
  methods: {
    increment() {
      this.$store.dispatch('increment'); //Vuex의 Actions를 먼저 실행시킨다.
    },
    zzz() {
      alert(mapState)
    }
  },
};
</script>