<template>
  <div>
    <button @click="sendMessageToChild">자식 컴포넌트로 메시지 보내기</button>
    <PropsChildView :message="messageFromParent" @messageReceived="handleMessageReceived" /> <!-- @messageReceived === v-on:messageReceived -->
  </div>
</template>

<script>
import PropsChildView from './PropsChildView.vue';

export default {
  components: {
    PropsChildView,
  },
  data() {
    return {
      messageFromParent: '임시 prop', // 2 - 위에 Props로 자동 전달 후 하위 컴포넌트에서 Updated 발생
    };
  },
  methods: {
    sendMessageToChild() { // 1
      this.messageFromParent = 'Prop로 전달된 메시지';
    },
    handleMessageReceived(message) { // 4
      console.log('자식 컴포넌트로부터 전달된 메시지:', message);
    },
  },
  /*
  Child 컴포넌트가 공통으로 쓰인다면 Child 컴포넌트에서는 항상 handleMessageReceived를 발생 시킬 수 있는데
  부모 컴포넌트에서는 handleMessageReceived를 구현시켜줘야 작동이 가능하다.
  하지만 구현을 안했다고해서 에러가 발생하는 것은 아니다.
   */

};
</script>
