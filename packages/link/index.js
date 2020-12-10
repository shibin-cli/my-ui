import MyLink from './src/Link.vue'

MyLink.install = Vue => {
    Vue.component('my-link', MyLink)
}

export default MyLink