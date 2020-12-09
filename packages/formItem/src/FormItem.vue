<template>
  <div class="form-item">
    <label>{{ label }}</label>
    <slot />
    <p v-if="errMessage">{{ errMessage }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "formItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  inject: ["form"],
  data() {
    return {
      errMessage: "",
    };
  },
  mounted() {
    this.$on("validate", this.validate);
  },
  methods: {
    async validate() {
      if (!this.prop) return;
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      const descriptor = { [this.prop]: rules };
      const validator =new Schema(descriptor);
      return validator.validate({ [this.prop]: value },errs=>{
        if (errs) {
          return (this.errMessage = errs[0].message);
        }
        this.errMessage = "";
      })
    },
  },
};
</script>

<style>
</style>