<template>
  <div class="about"></div>
</template>
<script lang="ts">
import axios, { AxiosRequestConfig } from "axios";
import { ReceiveAxiosType } from "@/views/test";
/*
Fetch
설치 필요 없음
상대적으로 axios에 비해 기능이 부족하다.
    대표적으로 가져온 데이터를 JSON으로 변환을 해주는 과정 필요.

    Axios
설치 필요함
기능 많음
JSON 자동 변

둘다 Promise 기반의 비동기 처리임

named Import와 default Import

import axios, { AxiosError, AxiosRequestConfig } from 'axios'

axios는 default Import,
    { AxiosError, AxiosRequestConfig } 는 named Import다.
    JS에서는 import { axios } from 'axios'도 가능하지만
TS에서는 위와 같이 쓰면 에러난다.
    defalt import는 import axios from 'axios'로 적어줘야 동작한다.

    모듈에서
export default axios; 이렇게 선언되어있으면 default고
export axios; 이렇게 되어있으면 named구나

[이준호] [오전 12:29] AxiosRequestConfig와 Promise(벗겨짐) 구현하기
*/

export default {
  mounted() {
    console.log(axios.get("https://jsonplaceholder.typicode.com/posts"));
    console.log(this.handleClick());
    //Promise pro;
    //console.log(this.a());
  },
  methods: {
    //methods 객체 내에서는 function 키워드를 빼고 사용한다.
    handleClick() {
      // 메서드의 로직을 작성합니다.
    },
    handleClick2: () => {
      // 메서드의 로직을 작성합니다.
    },
    async asyncMethod() {
      // 비동기적인 작업을 수행하는 메서드의 로직을 작성합니다.
    },
    // asyncMethod2: async <T>(): Promise<any> => {
    //   // 비동기적인 작업을 수행하는 메서드의 로직을 작성합니다.
    // }, 안됨 근데 test.ts는 됨
    async asyncTest<T>(baseUrl: string): Promise<T> {
      const response = await axios.get<T>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
    asyncTest2: async function <T>(baseUrl: string): Promise<T> {
      const response = await axios.get<T>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
    asyncTest4: async (baseUrl: string) => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
    /*asyncTest3: async <T>(baseUrl: string): Promise<T> => {
      const response = await axios.get<T>("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    },*/
  },
  // methods: {
  //   methodsCount(){
  //     console.log('methods');
  //     return 3;
  //   }
  // },
};
</script>
