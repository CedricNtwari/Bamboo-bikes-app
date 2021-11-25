<template>
  <section class="secondary">
    <!-- <Icon> -->
    <Primary />
  </section>
</template>

<script>
import Primary from './Primary.vue'

export default {
  name: 'Secondary',

  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      Primary,
    }
  },
}
</script>

<style lang="scss">
</style>
