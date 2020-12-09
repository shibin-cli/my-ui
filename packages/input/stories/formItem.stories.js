import MyInput from '..'
export default {
    title: 'MyInput',
    conponent: MyInput
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyInput },
    template: '<my-input v-bind="$props" placeholder="请输入"  v-model="value" />',
    data(){
      return {
        value:'hahah'
      }
    }
  });
  export const Input = Template.bind({});
  const PasswordTemplate = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyInput },
    template: '<my-input v-bind="$props" type="password" v-model="value"   placeholder="请输入"/>',
    data(){
      return {
        value:'ps'
      }
    }
  });
  export const Password = PasswordTemplate.bind({
  });

