import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AsyncView from "../views/AsyncView.vue";
import AsyncView2 from "../views/AsyncView2.vue";
import GenericView from "../views/GenericView.vue";
import TypeView from "@/views/TypeView.vue";
import InterfaceView from "@/views/InterfaceView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/async",
    name: "async",
    component: AsyncView,
  },
  {
    path: "/async2",
    name: "async2",
    component: AsyncView2,
  },
  {
    path: "/type",
    name: "type",
    component: TypeView,
  },
  {
    path: "/generic",
    name: "generic",
    component: GenericView,
  },
  {
    path: "/interface",
    name: "interface",
    component: InterfaceView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
