<template>
  <div class="wrapper">
    <LoaderHome v-if="isPreloaderActive"/>
    <template v-else>
      <Header/>
      <router-view />
      <Footer/>
    </template>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    LoaderHome: () => import('@/components/loader/home'),
    Header: () => import('@/components/layouts/header'),
    Footer: () => import('@/components/layouts/footer'),
  },
  computed: {
    ...mapGetters('preloader', ['isPreloaderActive'])
  },
  methods: {
    ...mapActions('about', ['getAbout']),
    ...mapActions('contacts', ["getContacts"]),
    ...mapActions('products', ['getProducts']),
    ...mapActions('socialProfiles', ['getSocialProfiles']),
    ...mapActions('auth', ['getAuthUser']),
    ...mapMutations('preloader', ['setPreloader'])
  },
  mounted() {
    Promise.all([
      this.getAbout(),
      this.getContacts(),
      this.getProducts(),
      this.getSocialProfiles(),
      this.getAuthUser()
    ])
        .finally(() => {
          this.setPreloader(false)
        })
  }

}
</script>

<style>

</style>