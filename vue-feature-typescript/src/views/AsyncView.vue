<template>
  <div class="about">
    <h1>{{ fetchData() }}</h1>
    <h1>{{ fetchData2 }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
async function fetchData() {
  // 비동기 작업 수행
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
}

const fetchData2 = async () => {
  // 비동기 작업 수행
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

fetchData();
fetchData2();
</script>
