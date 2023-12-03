// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
// import AppLink from '@/components/AppLink.vue'

// const app = createApp(App)
// // createApp (rootComponent: App)

// app.use(createPinia())
// // app.component(name: 'AppLink', component: AppLink)
// app.use(router)
// // app.use( plugin: router)

// app.mount('#app')
// // .mount( rootContainer: '#app')





import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


