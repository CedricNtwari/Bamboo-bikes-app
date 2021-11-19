<template>
  <div>
    <h1>Content 1</h1>
    <Primary :title="title" :paragraphe="paragraphe" :button="button" />
  </div>
</template>

<script lang="ts">
import Primary from '@/components/Primary.vue'

export default {
  name: 'index',

  components: {
    Primary,
  },
  data() {
    return {
      title: 'Download Resume',
      paragraphe: 'paragraphe',
      button: 'button',
    }
  },
}
</script>