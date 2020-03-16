import Vue from 'vue'
import Router from 'vue-router'
import SideNav from '@/components/SideNav'
import Dashboard from '@/components/Dashboard'
// import Viewinvoices from '@/components/Viewinvoices'
import Createinvoice from '@/components/CreateInvoice'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/sidenav',
      name: 'SideNav',
      component: SideNav
    },
    {
      path: '/createinvoice',
      name: 'CreateInvoice',
      component: Createinvoice
    },
  ]
})