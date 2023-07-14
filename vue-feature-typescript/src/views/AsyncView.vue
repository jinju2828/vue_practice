<template>
  <div class="about">
    <h1>{{ fetchData() }}</h1>
    <br />
    response.json으로 인해 Promise 객체 출력됨<br />
    <h1>{{ fetchData2 }}</h1>
    <br />
    그냥 함수 내용 출력됨
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

//일반 함수
async function fetchData() {
  // 비동기 작업 수행
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
}

//화살표 함수
const fetchData2 = async () => {
  // 비동기 작업 수행
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

fetchData();
fetchData2();

//------------------
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Promise 객체 생성
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Success!"); // 비동기 작업이 성공적으로 완료되면 resolve 호출
      } else {
        reject("Failure!"); // 비동기 작업이 실패하면 reject 호출
      }
    }, 2000);
  });
}

async function myAsyncFunction() {
  try {
    console.log("Start");
    const result = await asyncFunction(); // asyncFunction의 완료를 기다리기 위해 await 사용
    console.log(result); // 결과 출력
    console.log("End");
  } catch (error) {
    console.log("Error:", error); // 에러 발생 시 catch 블록 실행
  }
}

myAsyncFunction();
</script>
