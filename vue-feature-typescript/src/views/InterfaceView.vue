<template>
  <div class="about"></div>
</template>
<script lang="ts" setup>
//타입스크립트에서 Partial, Omit, Pick 유틸리티 타입을 활용하는 예제
//Partial은 nullable
//Omit은 빼기
//Pick은 특정 속성만 선택하기

type Person = {
  name: string;
  age: number;
  email: string;
};

// 모든 속성이 선택적으로 만들어짐
type PartialPerson = Partial<Person>;

// email 속성을 제외한 새로운 타입
type PersonWithoutEmail = Omit<Person, "email">;

// name, email 속성만 선택한 새로운 타입
type SelectedPersonInfo = Pick<Person, "name" | "email">;

// -------------------------------------------------------------
type UserInfo = {
  name: string;
  age: number;
  email: string;
};
// Partial로 일부 정보만 업데이트하는 함수
function updateUserInfo(
  user: UserInfo,
  updatedInfo: Partial<UserInfo>
): UserInfo {
  return { ...user, ...updatedInfo };
}

// Pick으로 선택된 정보만 가져오는 함수
function getSelectedInfo<T extends UserInfo, K extends keyof T>(
  user: T,
  keys: K[]
): Pick<T, K> {
  const selectedInfo = {} as Pick<T, K>;
  keys.forEach((key) => {
    selectedInfo[key] = user[key];
  });
  return selectedInfo;
}

// 예제 사용
const person: UserInfo = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

// 사용자 정보 업데이트 예제
const updatedPersonInfo = updateUserInfo(person, {
  age: 31,
  email: "updated@example.com",
});
console.log(updatedPersonInfo);

// 사용자 일부 정보 선택 예제
const selectedInfo = getSelectedInfo(person, ["name", "email"]);
console.log(selectedInfo);

// Omit으로 특정 정보를 제외하고 새로운 타입 정의
type UserInfoWithoutEmail = Omit<UserInfo, "email">;

// Omit으로 email 정보를 제외한 사용자 정보 업데이트하는 함수
function updateUserInfoWithoutEmail(
  user: UserInfoWithoutEmail,
  updatedInfo: Partial<UserInfoWithoutEmail>
): UserInfoWithoutEmail {
  return { ...user, ...updatedInfo };
}

// 사용자 정보 업데이트 예제 (email 정보 제외)
const updatedPersonInfoWithoutEmail = updateUserInfoWithoutEmail(person, {
  age: 31,
});
console.log(updatedPersonInfoWithoutEmail);
</script>
