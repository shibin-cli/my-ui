import MyButton from '../'
export default {
    title: 'MyButton',
    component: MyButton,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
      },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button v-bind="$props">提交</my-button>',
  });
  export const Primary = Template.bind({});

  // export const Large = Template.bind({});
  // Large.args = {
  //   size: 'large',
  // };
  // export const Medium = Template.bind({});
  // Medium.args = {
  //   size: 'medium',
  // };
 
  // export const Small = Template.bind({});
  // Small.args = {
  //   size: 'small',
  // };
 