import { createRouter, createWebHistory } from 'vue-router'
import WaitingRoom from '../views/WaitingRoom.vue'
import QuestionScreen from '../views/QuestionScreen.vue'
import ResultsScreen1 from '../views/ResultsScreen1.vue'
import ResultsScreen2 from '../views/ResultsScreen2.vue'
import ResultsScreen3 from '../views/ResultsScreen3.vue'
import WordCloudPage from '../views/WordCloudPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'waiting',
      component: WaitingRoom
    },
    {
      path: '/q',
      name: 'question',
      component: QuestionScreen
    },
    {
      path: '/r1',
      name: 'results1',
      component: ResultsScreen1
    },
    {
      path: '/r2',
      name: 'results2',
      component: ResultsScreen2
    },
    {
      path: '/r3',
      name: 'results3',
      component: ResultsScreen3
    },
    {
      path: '/w',
      name: 'WordCloudPage',
      component: WordCloudPage
    }
  ]
})

export default router