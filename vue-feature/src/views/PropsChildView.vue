<template>
  <div>
    <!-- 부모 컴포넌트로 데이터를 보내는 버튼과 이벤트 핸들러를 정의합니다. -->
    <button @click="sendMessageToParent">부모 컴포넌트로 메시지 보내기</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String, // 부모 컴포넌트로부터 전달받은 데이터를 props로 받습니다.
  },
  methods: {
    sendMessageToParent() { // 3
      // 부모 컴포넌트로 데이터를 보냅니다.
      // 'messageReceived'라는 이벤트를 통해 데이터를 전달합니다.
      this.$emit('messageReceived', this.message);
    },
  },
  /*
  emit은 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 발생시키는 역할도 하지만
  emit과 on을 섞어서 이벤트 버스 구현도 가능하다.
  만약에 A라는 상위 컴포넌트가 B, C라는 하위 컴포넌트를 가지고 있을 때
  B에서 C로 데이터를 넘기려면 B->A->C로 넘겨야한다.
  이런 경우에 이벤트 버스를 구현하면 메시지큐 처럼 "구독", "소비" 형태로 구현이 가능하다.
  EventBus에 관한 파일을 하나 만들어두고
  "소비"하는 B 컴포넌트에서 emit을 통해 발행하면
  "구독"하는 C 컴포넌트에서 on을 통해 구독하고 있으면 이벤트가 발생이 된다.
   */
};
</script>
