import Input from '../src/Input.vue'
import {
    mount
} from '@vue/test-utils'

describe('my-input', () => {
    test('input-text', () => {
        const wrapper = mount(Input)
        expect(wrapper.html()).toContain('input')
    })
    test('input-password', () => {
        const wrapper = mount(Input,{
            propsData:{
                type:'password'
            }
        })
        expect(wrapper.html()).toContain('input type="password"')
    })
    test('input-value', () => {
        const wrapper = mount(Input,{
            propsData:{
                type:'password',
                value:'123'
            }
        })
        expect(wrapper.props('value')).toBe('123')
    })
    test('input-snapshot', () => {
        const wrapper = mount(Input,{
            propsData:{
                type:'password',
                value:'123'
            }
        })
        expect(wrapper.vm.$el).toMatchSnapshot()
    })
})