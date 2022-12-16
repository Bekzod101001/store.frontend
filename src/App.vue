<template>
  <div class="wrapper">
    <LoaderHome v-if="!loadingHome"/>
    <template v-else>
      <Header/>
      <router-view />
      <Footer/>
    </template>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    LoaderHome: () => import('@/components/loader/home'),
    Header: () => import('@/components/layouts/header'),
    Footer: () => import('@/components/layouts/footer'),
  },
  data() {
    return {
      loadingHome: false
    }
  },
  methods: {
    ...mapActions('about', ['getAbout']),
    ...mapActions('contacts', ["getContacts"]),
    ...mapActions('products', ['getProducts']),
    ...mapActions('socialProfiles', ['getSocialProfiles'])
  },
  mounted() {
    Promise.any([
      this.getAbout(),
      this.getContacts(),
      this.getProducts(),
      this.getSocialProfiles()
    ])

    setTimeout(() => {
      this.loadingHome = true;
    }, 0)
    this.$store.dispatch('auth/getAuthUser');
  }

}
</script>

<style>

</style>