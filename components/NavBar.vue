<template>
  <div class="navigation">
    <!-- TODO: add real logo -->
    <nuxt-link to="/" class="navigation__logo"><img src="" />Bamboo Logo</nuxt-link>
    <nav class="navigation__container">
      <nuxt-link class="navigation__link" to="/"
        ><span class="navigation__text">Home</span></nuxt-link
      >
      <nuxt-link class="navigation__link" to="/about"
        ><span class="navigation__text">About us</span></nuxt-link
      >
      <nuxt-link class="navigation__link" to="/contact"
        ><span class="navigation__text">Contact</span></nuxt-link
      >
    </nav>
  </div>
</template>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: rem(67);
  background: $color-green-light;

  &__link {
    @include font-roboto-medium;

    color: $color-secondary-text;
    padding: 0 rem(20);

    &.router-link-exact-active {
      color: $color-black;
    }
  }

  &__text {
    @include underline-on-hover;
  }
}
</style>