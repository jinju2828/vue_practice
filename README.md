# Vue 기초 학습

### 초기 Vue 설치 방법

Node.js 설치 후 Command 에서 node -v 실행   
npm install vue   
npm vue -v로 확인   
npm install -g @vue/cli c   
npm i -g @vue/cli-init   
vue -V   
vue init webpack 프로젝트명   

### VS Code를 이용해 Github에 올리고 다시 받을 경우

npm install로 node_modules 폴더를 만들어줘서 의존성을 만들어줘야 합니다.

### 시작하기(과거 v2)

https://v2.ko.vuejs.org/v2/guide/index.html 에서 제공되는 2020년 이전에 v2 버전에서 제공되던 가이드 문서

### 시작하기(현재 v3)

https://ko.vuejs.org/guide/quick-start.html#try-vue-online 에서 제공되는 2020년 이후에 v3에서 제공하는 가이드 문서

### v2와 v3 차이

1. Vue 버전 2에는 제한된 typescript 지원, 성능 병목 현상, 까다로운 유지 보수, 제한된 스케일링 성능 등의 단점이 있습니다.   
2. Vue.js v3 버전은 Vue.js v2 버전과 호환성이 없기 때문에, Vue.js v2 코드를 Vue.js v3 버전에서 사용하면 에러가 발생합니다.   

### ESLint

ECMAScript Lint라고 불리는 정적 분석 도구를 프로젝트 설치할 때 기본적으로 Enter만 누르다보면 같이 설치되게 되어있는데, 문법에 대해 일관성을 보장해주게 된다.   
Example 1 )    
   
mounted () {
    this.count = 2
}
   
위의 문법에서 mounted 다음에 공백이 2번 필요한데 넣어주지 않으면 ESLint에서 에러를 발생시킨다.   

