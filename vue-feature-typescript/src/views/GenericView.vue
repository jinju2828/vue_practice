<template>
  <div class="about">
    <h1>{{ test1 }}</h1>
    <h1>{{ test1_1 }}</h1>
    <h1>{{ test2 }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

/**
 * <T>를 설정하면 아래와 같이 identity<number>를 붙일 수 있다.
 * 그렇게 하면 메소드의 매개변수와 리턴 타입이 number로 통일된다.
 * 이를 타입 일반화 라고 표현한다.
 * 물론 매개변수와 리턴타입도 T로 되어있어야 한다.
 * 그렇게 하면 메소드의 목적이 오로지 number 전용 매개변수라고 특정지어진다.
 * test1_1을 보면 <number>를 정해주지 않았는데 이런 경우엔 맘대로 써도 상관 없다.
 * @param arg
 */
function identity1<T>(arg: T): T {
  return arg;
}

const test1 = ref(identity1<number>(3)); // 3이 아닌 String을 넣으면 에러 발생
const test1_1 = ref(identity1("dd")); // <number>가 없기 때문에 String을 넣어줘도 상관 없다.

/**
 * 아래와 같이 boolean을 return으로 받고
 * <number>로 일반화를 진행하면 boolean이 number로 변환되어지나 생각할 수 있는데
 * 타입 변환에 대한 강제성은 존재하지 않기 때문에 boolean이 강제로 number로 변하는 것은 아니다.
 */
function identity2<T>(arg: T): boolean {
  return true;
}

const test2 = ref(identity2<number>(3));
//----------------------------------------
</script>
