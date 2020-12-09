import MyForm from '..'
import FormItem from '../../formItem'
import MyInput from '../../input'

import MyButton from '../../button'


export default {
    title: 'MyForm',
    conponent: MyForm
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyForm ,FormItem,MyInput},
    template:` <my-form :model="user" :rules="rules" ref="form">
    <form-item label="用户名" prop="name">
      <my-input
        placeholder="请输入用户名"
        v-model="user.name"
        @focus="focus"
      />
    </form-item>
    
    <form-item label="密码" prop="password">
      <my-input
        type="password"
        placeholder="请输入密码"
        v-model="user.password"
      />
    </form-item>
    <form-item>
      <my-button type="submit" @click="login">登录</my-button>
    </form-item>
  </my-form>`,
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "请输入正确的用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密吗",
            trigger: "blur",
          },
            {
            min: 6,
            max: 20,
            message: "请输入正确的密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    focus() {
      console.log("focus");
    },
    login(e) {
      e.preventDefault();
      this.$refs.form.validate((status)=>{
        if(status){
          alert('验证成功')
        }else{
          alert('验证失败')
        }
      })
    }
  },
  });
  export const Form = Template.bind({});
