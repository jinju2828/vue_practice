<template>
  <div class="about">

  </div>
</template>
<script>
import axios, {AxiosRequestConfig} from "axios";
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
[이준호] [오전 12:32] Generator?
프롱트
*/
export default {
  mounted() {
    // axios.get('https://api.example.com/data')
    //     .then(response => {
    //       // 응답 데이터 처리
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       // 에러 처리
    //       console.error(error);
    //     });

   // Promise promise = axios.get('https://api.example.com/data');
   //  const requestConfig: AxiosRequestConfig = {
   //    url: 'https://randomuser.me/api',
   //    method: 'GET'
   //  }
   //  const promise = axios.get('https://api.example.com/data');
   //  console.log(promise)

  }
}
</script>