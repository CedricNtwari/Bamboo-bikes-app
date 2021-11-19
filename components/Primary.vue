<template>
  <section class="primary">
    <h2 class="primary__title">{{ title }}</h2>
    <p class="primary__paragraphe">{{ paragraphe }}</p>
    <button class="primary__button">{{ button }}</button>
  </section>
</template>

<script>
export default {
  name: 'Primary',

  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    paragraphe: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss"></style>
