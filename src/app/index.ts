import { createApp } from "vue"
import { router, store } from "@/app/providers";
import App from './index.vue'


import './index.scss'


export const app = createApp(App)

app.use(router)
app.use(store)
