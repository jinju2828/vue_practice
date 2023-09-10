<template>
  <div>
    <div>
      <h2>컴포넌트 A</h2>
      <ul>
        <li v-for="(item, index) in listA" :key="index">
          <label>
            <input type="checkbox" v-model="item.checked" />
            {{ item.text }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>컴포넌트 B</h2>
      <ul>
        <li v-for="(item, index) in listB" :key="index">
          <label>
            <input type="checkbox" v-model="item.checked" />
            {{ item.text }}
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h2>컴포넌트 C</h2>
      <ul>
        <li v-for="(item, index) in listC" :key="index">
          <label>
            <input type="checkbox" v-model="item.checked" />
            {{ item.text }}
          </label>
        </li>
      </ul>
      <button @click="moveUp">Up</button>
      <button @click="moveDown">Down</button>

      <button @click="test">test</button>
    </div>
  </div>
</template>

<script>

/**
 * v-for도 v-model처럼 양방향이다.
 * this.lists[currentIndex] = this.lists[currentIndex].filter((item) => !item.checked);
 * 위 코드는 렌더링 불가능 코드이다.
 * Vue.js는 데이터의 리액티브 업데이트를 추적하기 위해 객체의 속성을 추적하므로 배열 자체를 대체하면 Vue.js가 해당 변경을 감지하지 못합니다.
 */
export default {
  data() {
    return {
      listA: [{ text: "A1", checked: false }, { text: "A2", checked: false }, { text: "A3", checked: false }],
      listB: [{ text: "A4", checked: false }],
      listC: [{ text: "A5", checked: false }, { text: "A6", checked: false }],
    };
  },
  methods: {
    moveUp() {
      // 현재 체크된 항목이 포함된 리스트를 찾습니다.
      const currentIndex = this.getCurrentIndex();

      // 현재 리스트 위의 리스트에 체크된 항목을 push합니다.
      if (currentIndex.index === 0) {
        // 현재 리스트가 첫 번째 리스트이면 아무 작업도 하지 않습니다.
      } else {
        const prevList = this.lists[currentIndex - 1];
        prevList.push(...this.lists[currentIndex].filter((item) => item.checked));
        this.lists[currentIndex].splice(this.lists[currentIndex].findIndex(item => item.checked), 1);
      }
    },
    moveDown() {
      // 현재 체크된 항목이 포함된 리스트를 찾습니다.
      const currentIndex = this.getCurrentIndex();

      // 현재 리스트 아래의 리스트에 체크된 항목을 push합니다.
      if (currentIndex === this.lists.length - 1) {
        // 현재 리스트가 마지막 리스트이면 아무 작업도 하지 않습니다.
      } else {
        const nextList = this.lists[currentIndex + 1];
        nextList.push(...this.lists[currentIndex].filter((item) => item.checked));
        this.lists[currentIndex].splice(this.lists[currentIndex].findIndex(item => item.checked), 1);
      }
    },
    getCurrentIndex() {
      for (let i=0; i<this.lists.length; i++) {
      //for (const list of this.lists) {
        const checkedItems = this.lists[i].filter((item) => item.checked);
        if (checkedItems.length > 0) {
          return i;
        }
      }
      return [];
    },
    test(){
      console.log(this.lists)
    }
  },
  computed: {
    lists() {
      return [this.listA, this.listB, this.listC];
    },
  },
};
</script>
