<template>
  <div class="about"></div>
</template>
<script lang="ts" setup>
// 유니온 타입이라고도 불린다.
let person: string | undefined = "John Doe";

// 객체 타입스크립트. age에 물음표를 붙인 것을 옵션 속성(Option Property)이라고 부른다.
let person2: {
  name: string;
  age?: number;
} = {
  name: "John Doe",
};

interface Person {
  name: string;
  age?: number;
}

const person3: Person = { name: "John Doe" };
//옵셔널 체이닝(Optional Chaining)이라고도 한다. 옵션을 체인해서 붙인다는 뜻.
// null이나 undefined인 값이 반환되면, 즉시 중단하고 undefined를 반환하는 문법이다.
// person3.age는 undefined이니까 undefined 반환

const age = person3?.age;
console.log(age); // undefined
console.log(person3.age); // 원래라면 오류가 떠야하는게 맞음.
// 근데 undefined가 뜨는데 이 부분은 타입스크립트의 한계다.
// 값이 존재하지 않을 수도 있는 프로퍼티에 대해 접근 방법은 있지만 실제로 값이 존재하지 않는 경우에 처리 방식을 개발자가 결정해야 한다.

const person4: Person = { name: "John Doe", age: 30 };
const age2 = person4?.age;
console.log(age2); // 30
console.log(person4.age); // 30
</script>
