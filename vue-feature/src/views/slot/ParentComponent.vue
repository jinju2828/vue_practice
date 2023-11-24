<!-- src/components/ParentComponent.vue -->
<template>
  <div>
    <h1>부모 컴포넌트</h1>
    <ChildComponent :message="parentMessage" v-slot="childProps"> <!-- v-slot="childProps"는 slot-scope="scopeProps"랑 의미가 같다 -->
      <!-- 슬롯 내용 시작 - 이 부분이 중요한게.. 위 파라미터는 슬롯이 아니고 <p>내용만 슬롯으로 전달된다는 뜻이다. -->
      <p>부모 컴포넌트에서 전달한 내용입니다.</p>
      <p>Received from Child: {{ childProps.dataFromChild }}</p>
      <!-- 슬롯 내용 끝 -->
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: '부모에서 전달한 메시지입니다.',
    };
  },
};

//scoped slot(v-slot)은 부모 컴포넌트가 자식 컴포넌트로부터 값을 전달받는 역할, 즉 상위 컴포넌트로 값을 전달함
//그리고 <slot></slot> 이 있으면 <ChildComponent>안에있는 <p>가 하위 컴포넌트로 전달된다.
// 법칙 1. 슬롯은 자식한테 박혀있고 v-slot은 부모한테 박혀있음
// 슬롯이란 부모 컴포넌트가 자식 컴포넌트로 컨텐츠 전달 및 특정 위치의 컴포넌트를 동적으로 대체할 수 있는 기능이다.
// 번외로 <v-slot:body>이렇게 이름을 지정할 수도 있는데 이런건 슬롯이 여러개일 경우 분리하기 위해서임
</script>

