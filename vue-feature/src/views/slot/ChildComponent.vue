<!-- src/components/ChildComponent.vue -->
<template>
  <div>
    <h2>자식 컴포넌트</h2>
    <p>부모로부터 받은 메시지: {{ message }}</p>
    <!-- 부모 컴포넌트에서 전달한 내용을 슬롯으로 받음 -->
    <slot :dataFromChild="dataToSendToParent"></slot>
  </div>
</template>

<script>
export default {
  props: {
    message: String, // 부모로부터 받은 메시지의 타입을 지정
  },
  data() {
    return {
      dataToSendToParent: 'Hello from Child!'
    };
  }
  // 부모 컴포넌트에서 전달한 내용을 받을 수 있도록 슬롯 정의 없음
};
</script>