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
      <div class="navigation__hamburger" @click="showMobileMenu">
        <div class="navigation__menu"></div>
        <div class="navigation__menu"></div>
        <div class="navigation__menu"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    showMobileMenu() {
      this.$emit('showMobileMenu')
    },
  },
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: rem(67);
  background: $color-green-light;

  &__link {
    @include font-roboto-medium;
    display: none;

    color: $color-secondary-text;
    padding: 0 rem(20);

    &.router-link-exact-active {
      color: $color-black;
    }

    @media ($tablet-up) {
      display: inline-block;
    }
  }

  &__text {
    @include underline-on-hover;
  }

  &__hamburger {
    cursor: pointer;
    padding: rem(17);

    &:active {
      background: $color-border;
    }

    @media ($tablet-up) {
      background: none;
      padding: 0;
    }
  }

  &__menu {
    width: rem(30);
    height: rem(3);
    background-color: $color-black;
    margin: rem(6);

    @media ($tablet-up) {
      display: none;
    }
  }
}
</style>