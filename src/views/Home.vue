<template>
  <div class="home">
    <!-- <Navbar /> -->
    <img
      :src="`/${$t('image')}.svg`"
      :alt="$t('image')"
    >
    {{ $t('home-content') }}    
  </div>
</template>

<style lang="scss">
  .home {
    padding: 20px 15px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 30px;
      margin-right: 20px;
    }
  }
</style>