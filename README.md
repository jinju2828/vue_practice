# Vue 기초 학습

### 초기 Vue 설치 방법

Node.js 설치 후 Command 에서 node -v 실행   
npm install vue   
npm vue -v로 확인   
npm install -g @vue/cli c   
npm i -g @vue/cli-init   
vue -V   
vue create 프로젝트명   

> **Note**   
>    
> Vue CLI(Command Line Interface)를 설치하면 Vue 프로젝트를 만들 수 있게된다.(단순하게 하고싶으면 CDN을 추가해서 사용하면 된다.)   
> vue CLI 3 버전 이상부터는 "vue create 프로젝트명"로 프로젝트를 만드는 것을 권장한다.   
> vue CLI 2 버전 이하에서는 "vue init webpack 프로젝트명"로 만드는 것이 일반적이었다.   
> 참고로 vue CLI 2는 2016년 12월, vue CLI 3은 2018년 8월에 출시되었다.   


### VS Code를 이용해 Github에 올리고 다시 받을 경우

npm install로 node_modules 폴더를 만들어줘서 의존성을 만들어줘야 합니다.

### 시작하기(과거 v2)

https://v2.ko.vuejs.org/v2/guide/index.html 에서 제공되는 2020년 9월 18일 이전에 v2 버전에서 제공되던 가이드 문서

### 시작하기(현재 v3)

https://ko.vuejs.org/guide/quick-start.html#try-vue-online 에서 제공되는 2020년 9월 18일 이후에 v3 버전에서 제공하는 가이드 문서

### Vue v2와 v3 차이(중요)

1. Vue 2에는 제한된 Typescript 지원, 성능 병목 현상, 까다로운 유지 보수, 제한된 스케일링 성능 등의 단점이 있습니다.   
2. Vue 3은 2020년 9월 18일 출시했으며 Vue 2 버전과 호환성이 없기 때문에 Vue 2 코드를 Vue 3 버전에서 사용하면 에러가 발생합니다.   
    
어떤걸 쓸까라고 한다면 v2를 쓰는 것이 낫다. 아직은 기업들도 v2를 쓰고 v2에 대한 생태계가 더 크다.   
v3는 생태계도 작을 뿐더러 Vuetify와 같은 Vue Component를 그려주는 Vue의 핵심 라이브러리도 v2를 쓰는 것을 더 권장하고 있다.(2023/05/28)   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/c7c1ef6c-c61b-4e24-926a-a5ecbe076cd0)   
   
v3가 나온지는 꽤 되었지만 시장 발전속도가 굉장히 더디다.   
2023년 기준 가장 트렌드가 강한 프론트엔드 프레임워크는 React다.   
앞으로 뜰만한 프레임워크는 NextJs, Solid, Astro, svelte 등인 것을 보면 프론트엔드 시장의 다양성으로 인해 Vue 3는 영원히 주목을 못 받을 수도 있겠다.   
더군다나 Vue 3에서 Typecript와 Composition의 장점을 Vue 2.7에서도 사용이 가능해서 3으로 넘어가는 속도가 더딘 것 같아 보인다.   
그리고 Vue 3가 나왔다고 해서 Vue 2가 업데이트를 안하는 것은 아니다. [Vue Github](https://github.com/vuejs/vue)에 들어가보면 현재 기준 2022년 11월 9일자로 2.7.14 버전이 stable 버전으로 등록되어있다.   
   
[NPM 다운로드 통계](https://www.npmjs.com/package/vue?activeTab=versions)를 확인하면 현재 가장 많이쓰고 있는 Vue 버전을 확인할 수 있다.

> **Note**   
>    
> vue create "프로젝트명"을 하면 아래와 같이 vue 3 혹은 vue 2를 선택할 수 있다.   
> ![image](https://github.com/stir084/Vue-Pratice/assets/47946124/2f9f4e57-c23b-4c3e-b382-2ebbe2dd3645)   

> **Note**   
>    
> vue create "프로젝트명"을 통해 프로젝트를 설치하면 VUE CLI가 가정 안정적이라고 생각하는 Vue Version을 선택한다.   
> package.json을 확인해보자.   
> ![image](https://github.com/stir084/Vue-Pratice/assets/47946124/a0003879-b1b1-4438-adfa-4307e05cb919)   
> Vue 버전은 2.6.14로 현재 2.7.14까지 나왔으니 CLI는 낮은 버전을 쓰라고 하고 있다.   
> 2.7.14를 쓰고 싶으면 해당 부분을 "vue": "^2.7.14"로 고치거나 항상 최신 버전을 사용하고 싶다면 "vue": "^2.x.x"로 수정한다.   
> 그리고 필히 node_modules폴더를 지우고 npm install로 다시 설치하면 된다.   



### ESLint

ECMAScript Lint라고 불리는 정적 분석 도구를 프로젝트 설치할 때 기본적으로 Enter만 누르다보면 같이 설치되게 되어있는데, 문법에 대해 일관성을 보장해주게 된다.   
   
```javascript
mounted () {
    this.count = 2
}
```
   
위의 문법에서 mounted 다음에 공백이 2번 필요한데 넣어주지 않으면 ESLint에서 아래와 같은 에러를 발생시킨다.   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/f10e5b0d-380b-47d6-a557-9eff4488fb67)
   
### 생명주기 훅

```javascript
export default {
  mounted() {
    console.log(`컴포넌트가 마운트 됐습니다.`)
  }
}
```
mounted 훅은 컴포넌트가 초기 렌더링 및 DOM 노드 생성이 완료된 후 코드를 실행하는 데 사용할 수 있습니다:   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/a29097a2-60ed-49dc-aac1-c9c54ffae4b2)
   
# [Vue Sample Template File](https://demos.wrappixel.com/free-admin-templates/vuejs/materialpro-vuejs-free/landingpage/index.html)   

### npm start 이슈

npm run dev, npm start 등 시작 시에는 항상 npm install로 package.json에 있는 정보를 토대로 node_modules 의존성을 내려받아야 한다. 

> **Note**   
>    
> 내려받은 프로젝트에 따라 npm run dev나 npm run start는 실행이 안될 수도 있다.   
> package.json 안에있는 파일에 "scripts" 부분에 serve만 있는 경우 npm run serve로 실행시켜야 한다.   


      
error:0308010C:digital envelope routines::unsupported   
만약 React든 Vue든 외부 프로젝트를 받아서 실행시킬 때 위와 같은 에러가 발생한다면 node.js 버전을 18.16.0 이 아닌 16.16.0으로 내리면 해결된다.   
https://nodejs.org/en/blog/release/v16.16.0   

### 외부 라이브러리 추가 방법

단순 javascript를 활용한 프로젝트는 해당 js파일 안에 cdn을 추가하거나 라이브러리 파일을 직접 프로젝트 경로에 넣어서 사용했지만   
Vue나 React에서는 npm으로 종속성 라이브러리를 관리하는 것이 좋다.   
```javascript
npm install "라이브러리"   
```
를 하면 node_modules 폴더에 해당 라이브러리가 포함된다.   
```javascript
npm install "라이브러리" --save
```
위처럼 --save를 붙이면 package.json 파일에 해당 라이브러리에 관한 정보가 기재되어 추후 npm install을 다시 하더라도 node_modules 폴더 내에 해당 라이브러리가 다운로드가 된다.   
추가된 library를 코드에서 import 해서 사용하면 된다.   
   
예를 들어 가장 많이 쓰는 axios를 다운받아보자.   
```javascript
npm install axios --save
```
그리고 main.js에 아래의 코드를 추가하면 된다.   
```javascript
import axios from 'axios'   
Vue.prototype.$axios = axios // 전역 axios 설정   
// 각각의 컴포넌트에서 import를 하지않고 this.$axios로 사용하면 된다.   
```

### 외부 라이브러리 추가 방법 2

외부 라이브러리를 추가하는 방법 중에는 CLI를 이용한 방법도 있다.   
vuetify를 사용하려고 하면 npm install vuetify로 다운 받는 것이 아니라 vue add vuetify를 통해서 다운받는 것이 좋다.   
npm install vuetify와 차이점이 있다면 둘다 똑같은 패키지 설치지만 vuetify를 npm을 통해서 설치하면 내가 수동으로 파일을 수정 및 추가해줘야한다.   
예를들어 vuetify.js(추가), main.js(수정), HelloWorld.vue(vuetify 소개 페이지로 수정) 등의 작업을 vue add를 통하면 자동으로 할 수 있다.   
Vuetify나 그 외에 vuex(상태관리 라이브러리), router 등은 필수로 설치하는 것이 좋으니 미리 설치해서 사용하자.
```javascript
vue add vuetify      
vue add vuex   
vue add router
```

### 라우터

라우터는 페이지 이동을 담당한다. SSR로 작업하면 라우터 없이도 페이지 기능을 구현할 수 있지만 CSR이면 라우터를 이용한다.   

![image](https://github.com/stir084/Vue-Pratice/assets/47946124/456cdf00-256f-47d8-bc2e-4cb58a2dc947)   
vue add router를 통해 설치하면 router 폴더에 index.js가 생기며 위와 같은 코드가 존재한다.   
라우터에 대한 샘플 코드이며 HomeView를 Import해서 해당 컴포넌트를 보여지게 하는 방법도 있으며   
component에서 직접 import해서 AboutView를 보여지게 하는 방법도 존재한다.   
   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/6a35ae96-ec67-49d8-ba18-0034f571c58a)   
App.vue 역시 router를 설치하면 위와 같이 수정 된다.   
   
```javascript
<router-link>
```
태그를 통해 페이지 이동을 만드는 방법이다.  
   
```javascript
<router-view/>
```
우리가 선택한 페이지에 컴포넌트를 렌더링 해주는 역할을 하며 없으면 페이지가 안보이게 된다.  
   
```javascript
this.$router.push('/pages/alerts');
```
각각의 컴포넌트 내 스크립트에서 위와 같이 이동시키면 된다.   
 
### 네비게이션 가드

Vue에는 페이지 이동을 담당하는 router.js가 있다.

```javascript
router.beforeEach((to, from, next) => {
  if (to.path === '/dashboard/basic-dashboard') {
    next('/pages/alerts');
  } else {
    next();
  }
})
```

위와 같은 코드를 router.js에 적어주면 특정 링크로 진입하기 전에 Guard하여 링크 진입을 가로채고 원하는 명령어로 수행이 가능하다.



