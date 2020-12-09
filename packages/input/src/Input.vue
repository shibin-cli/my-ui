<template>
  <div>
    <input v-bind="$attrs" @input="handleInput" :value="value" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "formItem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };
      const parent = findParent(this.$parent);
      if (parent) parent.$emit("validate");
    },
  },
};
</script>

<style>
</style>