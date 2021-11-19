<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">Bamboo Bicycle</nuxt-link>
    <nav>
      <nuxt-link to="/">Link 1</nuxt-link>&nbsp;|
      <nuxt-link to="/create">Link 2</nuxt-link>
    </nav>
  </div>
</template>

<style lang="scss">
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: $color-green;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 rem(5);
  color: $color-black;
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: $color-green;
  border-bottom: solid rem(2) $color-green;
}
.nav a {
  display: inline-block;
  color: $color-green;

  @media ($mobile-up) {
    display: flex;
  }
}
</style>