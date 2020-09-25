import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/home/Home.vue");
const Mall = () => import("@/views/mall/Mall.vue");
const Cart = () => import("@/views/cart/Cart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const Category = () => import("@/views/category/Category.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { title: "首页" }
  },
  {
    path: "/mall",
    name: "mall",
    component: Mall,
    meta: { title: "积分商城" }
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { title: "购物车" }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { title: "个人中心" }
  },
  {
    path: "/detail/:productId",
    name: "detail",
    component: Detail,
    meta: { title: "详情页" }
  },
  {
    path: "/category/:categoryId",
    name: "category",
    component: Category,
    meta: { title: "商品列表" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0}
    }
  }
});

export default router;
