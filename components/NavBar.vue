<template>
  <div class="nav">
    <!-- TODO: add real logo -->
    <nuxt-link to="/" class="nav__logo"><img src="" />Bike Logo</nuxt-link>
    <nav class="nav__link">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/About">About us</nuxt-link>
      <nuxt-link to="/Contact">Contact</nuxt-link>
    </nav>
  </div>
</template>

<style lang="scss">
@include font-roboto;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav .nav-item.router-link-exact-active {
  color: $color-green;
  border-bottom: solid rem(2) $color-green;
}
</style>