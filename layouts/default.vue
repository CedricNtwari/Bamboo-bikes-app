<template>
  <div class="app">
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <NavBar @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
    Some shared layout content:
    <slot />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      showMobileMenu: false,
    }
  },
}
</script>
    