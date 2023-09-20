<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>라디오 박스 컬럼</th>
        <th>데이터 컬럼 1</th>
        <th>데이터 컬럼 2</th>
        필요한 만큼 데이터 컬럼을 추가하세요.
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index"> <!-- :key는 Vue 렌더링 업데이트에 최적화 기능을 해준다.-->
        <td>
          <input type="radio" v-model="selectedItem" :value="item"> <!--:value에 있는 값을 selectedItem에 넣어준다. selectedColumn.-->
        </td>
        <td>{{ item.column1 }}</td>
        <td>{{ item.column2 }}</td>
        필요한 만큼 데이터 컬럼 값을 출력하세요.
      </tr>
      </tbody>
    </table>
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
