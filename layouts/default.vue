<template>
  <div id="app">
    <NavBar />
    Some shared layout content:
    <slot />
    <Footer />
   </div>
</template>

<script>
  import NavBar from "../components/NavBar.vue";
  import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
    },
    layout: "default",

 };
</script>
    