<template>
  <div>
    Promise all<br/>
    입력된 모든게 성공 상태여야 이행한다.<br/>
    첫번째 실패한 경우 그 이후것도 전부 에러 처리한다.<br/>
    모든 프로미스가 성공적이행인경우 결과값을 배열로 반환한다.<br/>
    <br/>
    Promise allSettled<br/>
    이건 입력된 모든게 어떤것이든 상관없이 이행한다.<br/>
    모든 프로미스의 성공 실패를 전부 반환해준다.<br/>
    <br/>
    axios All<br/>
    얘도 하나라도 싪패시 끝난다<br/>
    <br/>
    결과적으로 axios all과 promise all의 차이는 없다.<br/>
    allSettled를 선호하자<br/>

    <div>
      <button v-on:click="test">test</button>
      <button v-on:click="test2">test2</button>
      <!--      선택된 아이템: {{ selectedColumn }}-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";



export default {
  data() {
    return {
      items: [
        { column1: '데이터1-1', column2: '데이터1-2' },
        { column1: '데이터2-1', column2: '데이터2-2' },
        // 여기에 필요한 데이터 항목을 추가하세요.
      ],
      selectedItem: null
    };
  },
  computed: {
    selectedColumn() { // selectedColumn 직접 호출하지 않는 이상 호출이 안된다
      console.log("sdfsdf")
      if (this.selectedItem) {
        return this.selectedItem.column1; // 선택된 아이템의 첫 번째 컬럼 값을 반환합니다.
      } else {
        return '선택된 아이템이 없습니다.';
      }
    }
  },
  methods: {
    test() {
      const promise1 = Promise.resolve('Success 1'); // 강제 성공
      const promise2 = Promise.reject('Error 2'); // 강제 에러
      const promise3 = new Promise((resolve) => {
        setTimeout(() => {
          resolve('Success 3');
        }, 2000);
      });

      Promise.allSettled([promise1, promise2, promise3])
          .then(results => {
            results.forEach(result => {
              if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
              } else if (result.status === 'rejected') {
                console.error('Rejected:', result.reason);
              }
            });
          });
    },
    test2() {
      const requests = [
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
      ];

// 두 개의 Axios 요청을 병렬로 처리하고 결과를 Promise.allSettled로 받기
      Promise.allSettled(requests)
          .then(results => {
            results.forEach((result, index) => {
              if (result.status === 'fulfilled') {
                console.log(`Request ${index + 1} Successful:`, result.value.data);
              } else if (result.status === 'rejected') {
                console.error(`Request ${index + 1} Failed:`, result.reason);
              }
            });
          });
    }
  }
}
</script>



<!--
https://jsonplaceholder.typicode.com/users
posts
comments
albums-->
