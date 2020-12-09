import MyInput from './src/Input.vue'

MyInput.install = Vue => {
    Vue.component('my-input', MyInput)
}

export default MyInput