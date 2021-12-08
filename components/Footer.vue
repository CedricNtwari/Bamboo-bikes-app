<template>
  <div class="footer">
    <footer class="footer__row">
      <p class="footer__copyright">Copyright @{{ currentYear }} All rights reserved</p>
      <div>
        <a href="#"><img src="../assets/IconFacebook.svg" class="footer__icons" /></a>
        <a href="#"><img src="../assets/IconInstagram.svg" /></a>
        <a href="#"><img src="../assets/IconLinkedin.svg" /></a>
        <a href="#"><img src="../assets/IconTwitter.svg" /></a>
        <a href="#"><img src="../assets/IconYoutube.svg" /></a>
      </div>
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
  left: 0;
  bottom: 0;
  width: 100%;
  height: rem(80);
  background-color: $color-black;
  color: white;
  text-align: center;
  padding: 20px 0 0 0;
  font-family: 'Roboto', sans-serif;

  &__copyright {
    font-size: rem(14);
    color: $color-white;
  }
}
</style>
