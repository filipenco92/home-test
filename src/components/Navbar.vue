<template>
  <div class="navbar">
    <div class="navbar__logo" />

    <div class="navbar__links">
      <router-link :to="{name: 'home'}">
        {{ $t('home-link') }}
      </router-link>
      <router-link :to="{name: 'about'}">
        {{ $t('about-link') }}
      </router-link>
    </div>

    <CustomSelect
      v-model="language"
      class="navbar__select"
      :options="langOptions"
      label="language"
      track-by="locale"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomSelect from "./CustomSelect";

export default {
  name: 'Navbar',
  components: {
    CustomSelect
  },
  computed: {
    language: {
      get() {
        return this.$store.getters['localization/getLanguage'];
      },
      set(newVal) {
        this.$store.dispatch('localization/changeLanguage', newVal.locale);
      }
    },
    ...mapGetters({
      langOptions: 'localization/getLanguageOptions'
    })
  },
  watch: {
    language(newVal) {
      if((this.$route.params.lang !== newVal.locale)) {
        // change params lang if in Select have changed value
        this.$router.push({ params: { lang: newVal.locale } });
      }
    },
    $route(to) {
      if(this.language.locale !== to.params.lang) {
        this.$store.dispatch('localization/changeLanguage', to.params.lang);
      }
    }
  },

}
</script>

<style lang="scss">
  .navbar {
    background-color: #ccc;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    &__logo {
      width: 40px;
      height: 40px;
      background-image: url('/logo.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    &__links {
      display: flex;
      flex-wrap: wrap;
      a {
        padding: 0 5px;
        text-decoration: none;
        color: #000;
        opacity: 1;
        transition: opacity .2s;
        &:hover {
          opacity: .5;
          transition: opacity .2s;
        }
        &.router-link-exact-active {
          font-weight: bold;
          &:hover {
            opacity: 1;
            cursor: default;
          }
        }
      }
    }

    &__select {
      max-width: 200px;
      margin-left: 20px;
      @media (max-width: 767px) {
        max-width: 110px;
      }
    }
  }
</style>
