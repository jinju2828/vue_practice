<template>
  <div></div>
</template>
<script lang="ts" setup>
import axios, { AxiosError, AxiosRequestConfig } from "axios";

/* props */
const props = defineProps({
  isManagedList: Boolean,
});
/* data */
/* eslint-disable */
const test = {
  //ESLint인 경우 객체에 화살표 함수와 람다를 같이 쓰는 경우 ESLint 에러가 발생한다. 화살표 함수가 아닌 일반 함수로 만들어야한다.
  //그래서 lintOnSave를 해야하는 경우가 좀 있다.
  /*get: async <T>(
      baseUrl: string,
      pathVariable?: string,
  ) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  },*/
  //ESLint를 통과하려면 아래와 같이 사용한다.
  async get<T>(baseUrl: string, pathVariable?: string) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  },
}

</script>
