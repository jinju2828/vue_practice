export default {
    increment(context, user) {
        context.commit("increment", user);
    },
};
