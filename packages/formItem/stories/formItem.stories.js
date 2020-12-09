import FormItem from '..'
import MyInput from '../../input'
// import MyForm from '../../form'
export default {
    title: 'FormItem',
    conponent: FormItem
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FormItem,MyInput },
    template: '<form-item><my-input placeholder="请输入"/></form-item',
  });
  export const  Item= Template.bind({});
