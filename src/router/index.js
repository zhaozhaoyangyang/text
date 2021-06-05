import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
      {
          path:'/',
          redirect:'/sy'
      },
      
    {
      path: "/reg",
      component: () => import("../pages/reg"),
      meta:{
          headerShow:false,
          footerShow:false
      }
    },
    {
      path: "/login",
      component: () => import("../pages/login"),
      meta:{
        headerShow:false,
        footerShow:false
    }
    },
    {
      path: "/sy",
      component: () => import("../pages/sy"),
      meta:{
        headerShow:true,
        footerShow:true
    }
    },
    {
      path: "/fl",
      component: () => import("../pages/fl"),
      meta:{
        headerShow:true,
        footerShow:true
    }
    },
    {
      path: "/play",
      component: () => import("../pages/play"),
      meta:{
        headerShow:false,
        footerShow:true
    }
    },
    {
      path: "/radio",
      component: () => import("../pages/radio"),
      meta:{
        headerShow:true,
        footerShow:true
    }
    },
    {
      path: "/mine",
      component: () => import("../pages/mine"),
      meta:{
        headerShow:false,
        footerShow:true
    }
    },
  ],
  linkActiveClass:'active'
});

export default router;
