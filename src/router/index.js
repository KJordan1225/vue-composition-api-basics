// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       // component: HomeView
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }

//     // 7
//   ]
// })

// export default router






import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Home from "@/views/Home.vue";
import About2View from "../views/About2View.vue"
import Page3View from "../views/Page3View.vue"
import Page4View from "../views/Page4View.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about2',
      name: 'about2',
      // component: () => import('../views/About2View.vue')
      component: About2View
    },
    {
      path: '/page3',
      name: 'page3',
      // component: () => import('../views/About2View.vue')
      component: Page3View
    },
    {
      path: '/page4',
      name: 'page4',
      component: Page4View
    }
  ]
})

export default router