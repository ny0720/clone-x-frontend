import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import MainPage from '@/views/MainPage.vue';


const routes = [

  {
    path: '/',
    name: 'Login',
    component: LoginPage,

    // rule.1 로그인 페이지 접근 이벤트
    beforeEnter: (to, from, next) => {

      // rule.2 토큰 확인
      const token = localStorage.getItem('access_token');


      // rule.3 로그인 상태면 main 이동
      if(token) {

        next('/main');

      } else {

        next();

      }

    },

  },


  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage,
  },


  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,

    // rule.1 메인 페이지 접근 이벤트
    beforeEnter: (to, from, next) => {

      // rule.2 토큰 확인
      const token = localStorage.getItem('access_token');


      // rule.3 로그인 여부 판단
      if(token) {

        next();

      } else {

        next('/');

      }

    },

  },

];



const router = createRouter({

  history: createWebHistory(),

  routes,

});



// 유효하지 않은 경로 처리
router.beforeEach((to, from, next) => {


  const validPaths = [
    '/',
    '/signup',
    '/main'
  ];


  if(validPaths.includes(to.path)) {

    next();

  } else {

    next('/');

  }


});



export default router;