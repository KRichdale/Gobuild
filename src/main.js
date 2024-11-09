// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles

// Import icon sets
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Create Vuetify instance without manually importing components and directives
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
