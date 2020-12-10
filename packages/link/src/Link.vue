<template>
  <a
    :href="disable ? null : href"
    :class="classes"
    ><slot
  /></a>
</template>

<script>
export default {
  name: "my-link",
  props: {
    href: String,
    underline: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        disable: this.disable,
        nounderline: !this.underline,
      };
    },
  },
};
</script>

<style scoped>
.disable {
  cursor: not-allowed;
}
.nounderline {
  text-decoration: none;
}
</style>