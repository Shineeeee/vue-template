<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'CommonHeader',

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
