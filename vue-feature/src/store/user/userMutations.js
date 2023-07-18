export default {
    increment(state, user) {
        console.log(user); // 컴포넌트에서 넘긴 파라미터를 사용하기 위함.
        state.count = state.count + 1;
    },
};
