<template>
  <div>
    <br/>
    1. Vue에서 computed 속성은 기본적으로 getter만 제공합니다. <br/>
    즉, computed 속성을 사용하여 데이터를 가져올 수는 있지만, 데이터를 설정할 수는 없습니다.<br/>
    v-model은 양방향 바인딩을 제공하는 디렉티브입니다.<br/> v-model을 사용하여 양방향 바인딩을 설정하면, 사용자 입력으로 인해 데이터가 변경될 때마다 computed 속성도 변경됩니다.<br/>
    그러나 computed 속성이 getter만 제공하는 경우, 데이터를 설정할 수 없으므로 v-model과 호환되지 않습니다.<br/> 따라서 v-model을 사용하여 양방향 바인딩을 설정하는 경우, computed 속성에 setter를 제공해야 합니다.<br/>
    <input type="text" v-model="fullName" />
    <p>{{ fullName }}</p>

    <br/>
    <br/>
    2. updateObject 메소드 참조
    <p>{{ myArray[0] }}</p>
    <br/>
    3. computed는 상관없음<br/>
    <span>{{ zzzzz }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      myArray: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Doe' }
      ]
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        let names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    zzzzz() {

      //this.myArray[1].name = "hello";
      //this.myArray[1].push({id: 4, name:"dfdf"});
      // 위의 두개는 전부 unexpected Side Effect + no-side-effects-in-computed-properties 에러가 발생한다.
      // computed에서는 외부 객체를 수정해서는 안된다. this.myArray[1] + "dfdf" 이런 형태 말고는 불가능하다는 뜻.
      // 즉 다시 말해 computed는 함수형 프로그래밍을 지향한다.
      return this.myArray[1];
    },
    /*totalCount() {
      let sum = 0;
      for (var value in this.resourceData) {
        sum = sum + this.resourceData[value];
      }
      return sum;
    }*/
  },
  mounted() {
    this.updateObject();
  },
  methods: {
    updateObject() {
      // 배열 수정
      /*this.myArray[0] = {
        id: 5, name: 'dfdf'
      };*/
      // 배열 수정은 렌더링이 안된다.

      this.myArray[0].id = 4;
      // 객체 수정
      // 객체 수정은 렌더링이 된다.
      // 다만 mounted에서 직접 수정한 것(위 배열 수정으로 직접 수정해버린 경우)에 대해 간접 수정한 것은 당연히 수정이 안된다.
    }
  }
}
</script>
