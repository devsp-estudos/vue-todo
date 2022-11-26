import { createApp } from "vue"
import App from "@/App.vue"
import { appStore } from "@/store"
import "@/assets/main.css"

createApp(App)
  .use(appStore)
  .mount("#app")
