import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
VueCookies.config('7d')
VueCookies.set('theme', 'default')
VueCookies.set('hover-time', '1s')

export default VueCookies
