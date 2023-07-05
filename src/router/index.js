import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ListWeekView = () => import('@/views/ListWeekView.vue')
const VideosView = () => import('@/views/VideosView.vue')
const VideoView = () => import('@/views/VideoView.vue')
const WeeklyRoundupView = () => import('@/views/WeeklyRoundupView.vue')
const YunoView = () => import('@/views/YunoView.vue')
const PodcastsView = () => import('@/views/PodcastsView.vue')
const VinylsView = () => import('@/views/VinylsView.vue')
const TRKRVWView = () => import('@/views/TRKRVWView.vue')
const OtherView = () => import('@/views/OtherView.vue')
const TagsView = () => import('@/views/TagsView.vue')

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosView
    },
    {
      path: '/videos/:video',
      name: 'video',
      component: VideoView
    },
    {
      path: '/wtr',
      name: 'wtr',
      component: WeeklyRoundupView
    },
    {
      path: '/ynr',
      name: 'ynr',
      component: YunoView
    },
    {
      path: '/list-week',
      name: 'list-week',
      component: ListWeekView
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: PodcastsView
    },
    {
      path: '/vinyls',
      name: 'vinyls',
      component: VinylsView
    },
    {
      path: '/trkrvws',
      name: 'trkrvws',
      component: TRKRVWView
    },
    {
      path: '/other',
      name: 'other',
      component: OtherView
    },
    {
      path: '/tags/:tag',
      name: 'tags',
      component: TagsView
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
