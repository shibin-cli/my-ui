import MyLink from '..'


export default {
  title: 'MyLink',
  component: MyLink,
}


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components:{ MyLink },
    template:`<my-link href="https://baidu.com" v-bind="$props">dddd</my-link>`
  })

export const Link = Template.bind({});
