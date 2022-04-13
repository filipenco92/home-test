<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}
html {
  font-size: 14px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fafafa;
}

body {
  margin: 0;
}

.content {
  padding: 20px 15px;
  text-align: center;
}
</style>
