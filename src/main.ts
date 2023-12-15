import { createApp } from 'vue'
//import Vue from 'vue'
import * as VueRouter from 'vue-router';
import './index.css'
import Reports from '@/pages/Reports.vue'
import TemplateReports from '@/pages/TemplateReports.vue'
import History from '@/pages/History.vue'
import Scheduler from '@/pages/Scheduler.vue'
import App from '@/App.vue'
import {store} from "@/store/store";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

const routes = [
    { path: '/', component: Reports },
    { path: '/history', component: History },
    { path: '/scheduler', component: Scheduler },
    { path: '/template', component: TemplateReports },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,

})

//app.use(Vuelidate)
//@ts-ignore
app
    .component('VueDatePicker', VueDatePicker)
    .use(store)
    .use(router)
    .mount('#app')
