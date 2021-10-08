<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    next()
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: '73 — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
