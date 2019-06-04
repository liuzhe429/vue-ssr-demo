// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
// import router from './router'
import { createRouter } from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
export function createApp() {
  const router = new createRouter()
  const app = new Vue({
    router,
    render: h => (App)
  })
  console.log('app------'+JSON.stringify(app))

  return { app, router }
}
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
