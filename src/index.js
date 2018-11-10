import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import xalert from './components/alert/'
import * as filters from './filters'
import xdetail from './components/detail/'
import xUpload from './components/upload'
import vueUploadWeb from 'vue-upload-web'
import xProgress from './components/progress'

Vue.use(iView)
Vue.use(vueUploadWeb)

const components = [
    xalert,
    xdetail,
    xUpload,
    xProgress
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
    xalert,
    xdetail,
    xUpload,
    xProgress
}
