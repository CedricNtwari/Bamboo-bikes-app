<template>
  <div class="footer">
    <footer class="footer__row">
      <p class="footer__copyright">Copyright @{{ currentYear }} All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">
.footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: grey;

  &__copyright {
    font-size: rem(14);
  }
}
</style>
