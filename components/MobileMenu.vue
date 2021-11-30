<template>
  <div class="menu">
    <div class="menu__top">
      <button class="menu__button" @click="closeMobileMenu">X</button>
    </div>
    <div class="menu__center">
      <a class="menu__link" href="/"><span class="menu__text">Home</span></a>
      <a class="menu__link" href="/about"><span class="menu__text">About us</span></a>
      <a class="menu__link" href="/contact"><span class="menu__text">Contact</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',

  methods: {
    closeMobileMenu() {
      this.$emit('closeMobileMenu')
    },
  },
}
</script>

<style lang="scss">
.menu {
  height: 100vh;

  &__top {
    padding: rem(10);
    text-align: end;
  }

  &__button {
    border: none;

    &:hover {
      background-color: $color-backbround;
      color: $color-primary-text;
    }
  }

  &__center {
    @include font-roboto-medium;

    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 50%;
    font-size: rem(30);
  }

  &__link {
    color: $color-black;
    padding-bottom: rem(10);
  }

  &__text {
    @include underline-on-hover;
  }
}
</style>