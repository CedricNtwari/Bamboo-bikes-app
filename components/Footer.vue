<template>
  <div class="footer">
    <footer class="footer__row">
      <p class="footer__copyright">
        Copyright @{{ currentYear }} All rights reserved
      </p>
    </footer>
    <!-- <div class="footer__row">
      <a href="https://www.facebook.com/" target="_blank"
        ><i class="fab fa-facebook fa-2x"></i
      ></a>
      <a href="https://www.instagram.com/" target="_blank"
        ><i class="fab fa-instagram fa-2x"></i
      ></a>
      <a href="https://twitter.com/?lang=en" target="_blank"
        ><i class="fab fa-twitter fa-2x"></i
      ></a>
      <a href="https://www.linkedin.com" target="_blank"
        ><i class="fab fa-linkedin fa-2x"></i
      ></a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: grey;
}
.footer__copyright {
  font-size: 14px;
}
</style>
