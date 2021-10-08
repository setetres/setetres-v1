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
      title: '𝙎 𝙀 𝙏 𝙀 𝙏 𝙍 𝙀 𝙎 — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
