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
          <input type="radio" v-model="selectedItem" :value="item"> <!--:value에 있는 값을 selectedItem에 넣어준다 selectedItem이 단일 값이라면 바로 복사가 되지만 selectedItem이 computed 대상이므로 메소드가 실행됨.-->
        </td>
        <td>{{ item.column1 }}</td>
        <td>{{ item.column2 }}</td>
        필요한 만큼 데이터 컬럼 값을 출력하세요.
      </tr>
      </tbody>
    </table>
    <div>
      선택된 아이템: {{ selectedColumn }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

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
    selectedColumn() { // selectedColumn은 selectedItem 값에 의존하고 있어서 해당 값이 변경될 때마다 자동 호출 된다.
      if (this.selectedItem) {
        return this.selectedItem.column1; // 선택된 아이템의 첫 번째 컬럼 값을 반환합니다.
      } else {
        return '선택된 아이템이 없습니다.';
      }
    }
  }
}
</script>
