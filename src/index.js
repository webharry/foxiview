import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import xalert from './components/alert/'
import * as filters from './filters'

Vue.use(iView)

const components = [
    xalert
]


const install = function (Vue) {
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    xalert
}
