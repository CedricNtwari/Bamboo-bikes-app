<template>
  <div class="footer">
    <footer class="footer__row">
      <p class="footer__copyright">
        Copyright @{{ currentYear }} All rights reserved
      </p>
      <div class="footer__icons">
        <a href="#"><img src="../assets/IconFacebook.svg" /></a>
        <a href="#"><img src="../assets/IconInstagram.svg" /></a>
        <a href="#"><img src="../assets/IconLinkedin.svg" /></a>
        <a href="#"><img src="../assets/IconTwitter.svg" /></a>
        <a href="#"><img src="../assets/IconYoutube.svg" /></a>
      </div>
    </footer>
  </div>
</template>

<script>
// import IconFacebook from '../assets/IconFacebook.svg'

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
  display: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: grey;

  &__copyright {
    font-size: rem(14);
  }
}
</style>
