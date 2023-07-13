<template>
  <div>
    <input type="text" v-model="message">
    <p>입력된 메시지: {{ message }}</p>
    <p>메시지 길이: {{ messageLength }}</p>
    <p>메시지 길이: {{ messageLength2 }}</p>

    watch는 데이터 변경을 감지하여 비동기 작업이나 추가 로직을 수행하기에 적합<br>
    computed는 값을 계산, 조합, 변형하는 목적. computed는 watch랑 다르게 결과값이 캐싱된다.<br>
    그러므로 computed는 결과값이 동일할 때 사용하는 것이 중요하다.<br>
    그래서 결과값이 매번 다른 경우에는 watch보다 느릴 수 있다.<br>

  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      messageLength: 0
    };
  },
  watch: {
    message(newMessage) {
      this.messageLength = newMessage.length;
    }
  },
  computed: {
    messageLength2() {
      return this.message.length;
    }
  }
};
</script>