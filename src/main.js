import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { themes } from './themes.js'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
      defaultTheme: 'light'
    , themes: themes
  }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')