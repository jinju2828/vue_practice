# Vue 기초 학습

아래 내용은 Vue 기초 학습 및 시행착오를 겪을만한 내용을 적어놨습니다.   
vue-feature 프로젝트는 vue 기능을 테스트 하기 위해서 추가한 프로젝트이다.   
현재까지 추가된 기능은 vuex, v-model, v-on, v-bind, watch와 computed다.    

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

> **Note**
> 
> [Vue Sample Template File](https://demos.wrappixel.com/free-admin-templates/vuejs/materialpro-vuejs-free/landingpage/index.html)   
> 위 링크를 통해 Vue 2 Sample 파일을 다운 받을 수 있으며 Vue 구조를 눈에 익히기 좋다.   
> 위의 vue create 명령어 대신 위의 프로젝트를 사용해도 된다.   


### 프로젝트를 Github에 올리고 다시 받을 경우

npm install로 package.json에 있는 정보를 토대로 node_modules 의존성을 내려받아야 한다. 
이건 어느 프론트엔드 프레임워크나 마찬가지다.   

### 시작하기(v2)

https://v2.ko.vuejs.org/v2/guide/index.html   
v2에 대한 공식 가이드 문서이며 2023년 5월 현재 기준에도 v2를 가장 많이 사용한다.   
위의 시작하기(v2) 폴더에서 sample HTML 파일로 테스트 해볼 수 있다.

### 시작하기(v3)

https://ko.vuejs.org/guide/quick-start.html#try-vue-online   
v3에 대한 공식 가이드 문서이며 호환성 문제로 v3는 아직 권장하지 않는 편이다.   
위의 시작하기(v3) 폴더에서 sample HTML 파일로 테스트 해볼 수 있다.

### Vue v2와 v3 차이(중요)

1. Vue 2에는 제한된 Typescript 지원, 성능 병목 현상, 까다로운 유지 보수, 제한된 스케일링 성능 등의 단점이 있다. 
2. Vue 3은 2020년 9월 18일 출시했으며 Vue 2 버전과 호환성이 없기 때문에 Vue 2 코드를 Vue 3 버전에서 사용하면 에러가 발생한다.   
    
v3 보다는 v2를 쓰는 것이 낫다. (2023/05/28)   
아직은 기업들도 v2를 쓰고 v2에 대한 생태계가 더 크다.   
v3는 생태계도 작을 뿐더러 Vuetify와 같은 Vue Component를 그려주는 Vue의 핵심 라이브러리도 v2를 쓰는 것을 더 권장하고 있다.   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/c7c1ef6c-c61b-4e24-926a-a5ecbe076cd0)   
   
v3가 나온지는 꽤 되었지만 시장 발전속도가 굉장히 더디다.   
2023년 기준 가장 트렌드가 강한 프론트엔드 프레임워크는 React이고 앞으로 뜰만한 프레임워크는 NextJs, Solid, Astro, svelte 등인 것을 보면 프론트엔드 시장의 다양성으로 인해 Vue 3는 영원히 주목을 못 받을 수도 있겠다.   
더군다나 Vue 3에서의 Typecript와 Composition API 장점을 Vue 2.7에서도 사용이 가능해서 3으로 넘어갈 이유는 더더욱이 부족하다.  
그리고 Vue 3가 나왔다고 해서 Vue 2가 업데이트를 안하는 것은 아니다. [Vue Github](https://github.com/vuejs/vue)에 들어가보면 현재 기준 2022년 11월 9일자로 2.7.14 버전이 stable 버전으로 등록되어있다.   
   
[NPM 다운로드 통계](https://www.npmjs.com/package/vue?activeTab=versions)를 확인하면 현재 가장 많이쓰고 있는 Vue 버전을 확인할 수 있다.

> **Note**   
>    
> vue create "프로젝트명"을 하면 아래와 같이 vue 3 혹은 vue 2를 선택할 수 있다.   
> ![image](https://github.com/stir084/Vue-Pratice/assets/47946124/2f9f4e57-c23b-4c3e-b382-2ebbe2dd3645)   

> **Note**   
>    
> vue create "프로젝트명"을 통해 프로젝트를 설치하면 Vue CLI가 가정 안정적이라고 생각하는 Vue Version을 선택한다.   
> package.json을 확인해보자.   
> ![image](https://github.com/stir084/Vue-Pratice/assets/47946124/a0003879-b1b1-4438-adfa-4307e05cb919)   
> Vue 버전은 2.6.14로 현재 2.7.14까지 나왔으니 CLI는 그것보다 낮은 버전을 쓰라고 권장하고 있는 셈이다.   
> 2.7.14를 쓰고 싶으면 해당 부분을 "vue": "^2.7.14"로 고치거나 항상 최신 버전을 사용하고 싶다면 "vue": "^2.x.x"로 수정한다.   
> 그리고 node_modules 폴더를 지우고 npm install로 다시 설치하면 된다.   


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
mounted 훅은 컴포넌트가 초기 렌더링 및 DOM 노드 생성이 완료된 후 코드를 실행하는 데 사용할 수 있다.   
그 외의 생명주기는 아래의 그림을 참고하자.   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/a29097a2-60ed-49dc-aac1-c9c54ffae4b2)
   
### npm start 동작 시 node 버전에 따른 이슈

error:0308010C:digital envelope routines::unsupported   
만약 React든 Vue든 외부 프로젝트를 받아서 실행시킬 때 위와 같은 에러가 발생한다면 node.js 버전을 18.16.0 이 아닌 16.16.0으로 내리면 해결된다.   
https://nodejs.org/en/blog/release/v16.16.0   

> **Note**   
>    
> 내려받은 프로젝트에 따라 npm run dev나 npm run start는 실행이 안될 수도 있다.   
> package.json 안에있는 파일에 "scripts" 부분에 serve만 있는 경우 npm run serve로 실행시켜야 한다.   


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
npm 5 전에는 위처럼 --save를 붙이면 package.json 파일에 해당 라이브러리에 관한 정보가 기재되었다.
하지만 npm 5 위로부터는 --save가 없어도 package.json 파일에 해당 라이브러리 정보가 기재되며 --save 기능이 의미가 없어졌다.
   
가장 많이 쓰는 axios를 다운받아보자.   
```javascript
npm install axios
```
그리고 main.js에 아래의 코드를 추가하면 된다.   
## Vue 2
```javascript
import axios from 'axios'   
Vue.prototype.$axios = axios // 전역 axios 설정   
// 각각의 컴포넌트에서 import를 하지않고 this.$axios로 사용하면 된다.
// 혹은 각각의 컴포넌트에서 import axios from 'axios'로 사용한다. (공통 axios 파일 하나만 만들 경우 이렇게 사용해도 된다)   
```
## Vue 3
```javascript
import { createApp } from "vue";   
import App from "./App.vue";   
import axios from "axios";   
   
const app = createApp(App);   
app.config.globalProperties.$axios = axios;   
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

### Vuetify

vuetify를 설치하면 <v- 형태로 이루어진 태그를 사용할 수 있다.   
여기서 가장 중요한 태그는 v-app 태그다.   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/8eda2f1d-b43d-4e65-abee-936ff65761fb)   
v-app 태그를 적용해줘야 node_modules\vuetify\dist\vuetify.css 가 적용되며 vuetify의 시작 태그라고 보면된다.   
v-app 태그 없이도 하위 영역에 <v- 태그는 사용할 수 있기 때문에 css가 적용이 안된다면 v-app 태그 때문이다.   

### 라우터

라우터는 페이지 이동을 담당한다. SSR로 작업하면 라우터 없이도 페이지 기능을 구현할 수 있지만 CSR이면 라우터를 이용한다.   

![image](https://github.com/stir084/Vue-Pratice/assets/47946124/6a208e00-6cf2-402f-8840-50eb782652cd)   
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
   
위의 사진을 보면 routes 변수를 설정할 때 name이 있는데 이 name을 통한 이동도 가능하다.   
```javascript
this.$router.push({ name: 'home' }); // 'home'이라는 이름을 가진 라우트로 이동
```
```javascript
<router-link :to="{ name: 'about' }">About 페이지로 이동</router-link>   
//:to는 v-bind:to의 축약형이다.
```
    

### Vuex

## 사용법 1

```javascript
import {mapState} from 'vuex'   
computed: mapState({
        count: state => state.count, // mapState라는 헬퍼 함수 내에 state 헬퍼 객체에 있는 count를 가져오는 방법
        countAlias: 'count' // 위의 방법 대신 바로 namespace를 이용해 count를 가져오는 방법
    })
```

store/index.js에 저장된 state를 가져오기 위해 mapState라는 헬퍼 함수를 사용해서 가져올 수 있다.   

## 사용법 2

```javascript
computed: {
    ...mapState([
        'count'
    ])
}

...mapState({
    cnt: 'count',
})

<b>count : {{cnt}}</b><br>
```
배열로 가져와 쓰거나 객체로 가져와서 쓸 수 있다.   
    
Computed에 사용하는 이유   
   
Vuex를 가져와서 사용방법은 아래와 같다.   
1. 템플릿에 `this.$store.state.user`속성 바인딩   
2. computed 속성에 `this.$store.state.user`   
3. computed 속성에 mapState   
4. computed 속성에 mapGetters   
1,2는 바로 들고오는 방법이고 3,4는 기능이 같으므로 어떤 것을 선택할지는 팀의 코드 컨벤션을 생각하면서 만들면 된다.   
   
compute에 사용하는 이유는 다음과 같다.   
상태 변경시 자동 업데이트, watch에 없는 캐싱 기능   

## 사용법 3   

Store 모듈이라는게 store/index.js 뿐만 아니라 다른 파일에 있을 수도 있다.   
그런 경우에는 아래와 같이 경로를 다 입력해서 가져올 수 있다. /B/C/Book 과 같은 방식으로 연결   
```javascript
methods: {
        ...mapActions('A/B/C/Book', [ // A/B/C/Book에 있는 모듈
            'setList'
        ])
    }
```

근데 이렇게 하면 methods 안에 경로가 매번 포함되어야 하니 가독성이 딸릴 수 있다.   

## 사용법 4

```javascript
const userHelper = createNamespacedHelpers("user");
```

### Vue Devtools

Vue Devtools를 검색하면 나오는 것은 vue 3 전용 확장 프로그램이고    
Vue 2를 사용할 때는 아래 링크의 Legacy 확장 프로그램을 사용해야한다.   
https://chrome.google.com/webstore/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp   

## Vuex와의 통합   
![image](https://github.com/stir084/Vue-Pratice/assets/47946124/aa2cd474-55fd-418d-b183-5be9a1521319)   
Vuex를 쓰면 Time Travel 기능을 위와 같이 개발자도구에서 이용할 수 있다.   
Vuex의 자세한 기능은 Vue-Feature 프로젝트 확인하면 된다.   

## Vue 데이터 및 메소드 접근   
   
Vue DevTools를 열면 컴포넌트를 선택할 수 있는데 선택하고 나면 $vm0이라는게 컴포넌트 옆에 생긴다.   
$vm0.메서드 혹은 $vm0.데이터 로 가져와서 사용할 수 있다.

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



