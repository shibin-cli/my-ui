<template>
  <div>
    <button v-bind="$attrs" v-on="$listeners" :class="classes"><slot /></button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        button: true,
        [`button--${this.size}`]: true,
      };
    },
  },
};
</script> 

<style>
.button {
  border-radius: 4px;
}
.button.button--small {
  padding: 7px 9px;
  font-size: 12px;
}
.button.button--medium {
  padding: 10px 18px;
  font-size: 14px;
}
.button.button--large {
  padding: 12px 23px;
  font-size: 16px;
}
</style>