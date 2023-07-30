<template>
  <div class="hello">
    <h1>v-bind 기능</h1>
    <img v-bind:src="imageSrc" alt="이미지"><br>
    img에 쓰이는 v-bind:src는 이미지 경로를 바인딩한다.<br>
    <a v-bind:href="linkUrl">링크</a><br>
    a에 쓰이는 v-bind:href는 링크를 바인딩한다.

    <h3 v-bind:href="linkUrl">링크(클릭안됨)</h3>
    당연하게도 h3은 a 태그가 아니므로 v-bind:href가 먹히지 않는다.

    <h1>v-on 기능</h1><br>
    v-on은 태그에 이벤트를 거는 것이라고 보면된다. v-on:input처럼 말이다.<br>
    v-on은 @와 같은 의미를 가진다. PropsView 참조 <br>


    <h1>v-model 기능</h1><br>
    <input type="text" v-model="message">
    <p>수정해 보세요: {{ message }}</p>
    <input type="text" v-bind:value="message" v-on:input="message = $event.target.value">
    <p>입력된 메시지: {{ message }}</p>
    v-model은 양방향 데이터 바인딩 기능을 수행한다.<br><br>
    v-model은 v-bind와 v-on이 합쳐진 기능이다.<br>

    v-on으로 message 값을 변경하면 변경된 것을 바인딩하는 것은 v-bind라는 뜻이다.<br>
    v-bind는 외부에서 message 값이 변경되는 것을 감지하는 특성이 있기 때문이다.<br>
    v-on:input은 input 이벤트가 발생하면 해당 target.value(this.value)가 message에 들어간다.<br>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      imageSrc: 'image.jpg',
      linkUrl: 'https://www.example.com'
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>