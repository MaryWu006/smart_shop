import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/home/Home.vue");
const Mall = () => import("@/views/mall/Mall.vue");
const Cart = () => import("@/views/cart/Cart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
const Detail = () => import("@/views/detail/Detail.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/mall",
    component: Mall,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:productId",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
