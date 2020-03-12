import Vue from 'vue'
import Router from 'vue-router'
// import SignIn from '@/components/SignIn'
import Dashboard from '@/components/Dashboard'
import Viewinvoices from '@/components/Viewinvoices'
import Createinvoice from '@/components/CreateInvoice'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'SignIn',
    //   component: SignIn
    // },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'Register',
      component: Viewinvoices
    },
    {
      path: '/createinvoice',
      name: 'CreateInvoice',
      component: Createinvoice
    },
  ]
})