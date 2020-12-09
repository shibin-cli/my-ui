<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: "LgForm",
  props: {
    model: Object,
    rules: Object,
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(cb) {
        console.log('form validate')
      Promise.all(
        this.$children
          .filter((child) => child.prop)
          .map((child) => child.validate())
      )
        .then(() => {
          cb(true);
        })
        .catch(() => cb(false));
    },
  },
};
</script>

<style>
</style>