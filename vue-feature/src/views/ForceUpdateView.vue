<template>
  <div>
    <table>
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
      <button v-on:click="addItem">addItem</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    addItem() {
      // push, pop, splice 등은 간접 수정에 속하고 변경 시 화면 렌더링이 된다.
      // this.items.push({ column1: '데이터3-1', column2: '데이터3-2' });

      // 직접 요소를 수정하는 경우는 직접 수정에 속하고 변경 시 화면 렌더링이 안된다.
      // this.items[0] = { column1: '데이터3-1', column2: '데이터3-2' };

      // 직접 요소를 수정하는 경우에는 this.$set()을 사용한다.
      // this.$set(this.items, 2, { column1: '데이터3-1', column2: '데이터3-2' });

      // 직접 요소를 수정하는 경우는 직접 수정에 속하고 변경 시 화면 렌더링을 위해 강제 업데이트를 발생 시킨다.
      // 성능이 파괴될 것은 감안하고 써야한다.
      this.items[0] = { column1: '데이터3-1', column2: '데이터3-2' };
      this.$forceUpdate();
    }
  }
}
</script>
