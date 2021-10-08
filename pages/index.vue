<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  head() {},
  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
