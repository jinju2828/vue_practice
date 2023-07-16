<template>
  <div class="about"></div>
</template>
<script lang="ts" setup>
/**
 * 유니온 타입 설명
 */
// 유니온 타입이라고도 불린다.
let person: string | undefined = "John Doe";

/**
 * 옵션 프로퍼티 설명
 */
// 객체 타입스크립트. age에 물음표를 붙인 것을 옵션 속성(Option Property)이라고 부른다.
let person2: {
  name: string;
  age?: number;
} = {
  name: "John Doe",
};

interface Person {
  name: string;
  age?: number;
}

const person3: Person = { name: "John Doe" };

/**
 * 옵셔널 체이닝에 관한 설명.
 */
//옵셔널 체이닝(Optional Chaining)이라고도 한다. 옵션을 체인해서 붙인다는 뜻.
// null이나 undefined인 값이 반환되면, 즉시 중단하고 undefined를 반환하는 문법이다.
// person3.age는 undefined이니까 undefined 반환
const age = person3?.age;
console.log(age); // undefined
console.log(person3.age); // 원래라면 오류가 떠야하는게 맞음.
// 근데 undefined가 뜨는데 이 부분은 타입스크립트의 한계다.
// 값이 존재하지 않을 수도 있는 프로퍼티에 대해 접근 방법은 있지만 실제로 값이 존재하지 않는 경우에 처리 방식을 개발자가 결정해야 한다.

const person4: Person = { name: "John Doe", age: 30 };
const age2 = person4?.age;
console.log(age2); // 30
console.log(person4.age); // 30

/**
 * 맵드 타입
 */
type Keys = "option1" | "option2";
type Flags1 = { [K in Keys]: boolean };

// 위와 같이 정의했을 경우 풀어 헤쳐놓은 모습은 아래와 같다.
type Flags2 = {
  option1: boolean;
  option2: boolean;
};
/**
 * 맵드 타입과 Partial에 관한 설명
 */
// 맵드 타입을 사용하여 모든 속성을 선택적으로 만드는 예제
type Partial<T> = {
  [P in keyof T]?: T[P];
};
// T는 아래 Partial<User>로 인해 곧 T는 User다
// keyof T를 하면 User에 있는 키를 유니온 타입으로 가져온다 "id" | "name" | "email"
// [P in keyof T]?는 [P in "id" | "name" | "email"]?으로 변한다.
// 결과적으로 [P in "id" | "name" | "email"]?: T[P] 이런 형태가 되는데
// 이걸 다시 풀어내면
/*
{
  "id"?: T["id"];
  "name"?: T["name"];
  "email"?: T["email"];
}
 */
// 위와 같다. 첫번째 줄은 id? : number; 이렇게 될 것이다.
// 중요한 점이 있다면 위 코드 없이 아래 코드만으로도 돌아간다 Partial을 만들고싶으면 그냥 아래처러 Partial만 정의하면 된다.

// 사용 예제
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

// PartialUser 타입은 User의 속성을 선택적으로 가지고 있는 타입입니다.
// { id?: number; name?: string; email?: string; } 와 같습니다.

/**
 * Omit 에 대한 설명
 */
// 특정 속성만 제거한 타입을 정의합니다. pick의 반대
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 타입 재정의해서 type에 넣는다
type shoppingItem = Omit<Product, "stock">;

// 타입을 재정의해서 바로 apple 변수에 넣는다.
const apple: Omit<Product, "stock"> = {
  id: 1,
  name: "red apple",
  price: 1000,
  brand: "del",
};

/**
 * 위의 내용을 바탕으로 실습하기
 */
interface User2 {
  id: number;
  name: string;
  email: string;
}
type t1 = Partial<User2>; // 모든 요소를 Partial로 만들어서 type 만들기
//interface t3<Partial<User>>; Interface를 Interface로 바꾸는 것은 불가능
const t2: Partial<User2> = {
  // 모든 요소를 Partial로 만들어서 변수 정의
  id: 3,
};
</script>
