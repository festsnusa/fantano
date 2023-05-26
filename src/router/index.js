import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ListWeekView = () => import('@/views/ListWeekView.vue')
const NewMusicFridayView = () => import('@/views/NewMusicFridayView.vue')
const ReviewsView = () => import('@/views/ReviewsView.vue')
const ReviewView = () => import('@/views/ReviewView.vue')
const WeeklyRoundupView = () => import('@/views/WeeklyRoundupView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView
    },
    {
      path: '/review/:review',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/wtr',
      name: 'wtr',
      component: WeeklyRoundupView
    },
    {
      path: '/nfr',
      name: 'nfr',
      component: NewMusicFridayView
    },
    {
      path: '/list-week',
      name: 'list-week',
      component: ListWeekView
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' },
    }
  ]
})

export default router
