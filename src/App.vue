<template>
  <div class="wrapper">
    <LoaderHome v-if="!loadingHome" />
    <template v-else>
      <Header />
      <router-view></router-view>
      <Footer />
    </template>
  </div>
</template>

<script>
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
  mounted() {
    setTimeout(() => {
      this.loadingHome = true;
    }, 0)
  }

}
</script>

<style>

</style>