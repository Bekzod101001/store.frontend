<template>
  <div class="wrapper">
    <LoaderHome v-show="isPreloaderActive"/>
    <template>
      <Header :categories="categories"/>

      <LoaderHome v-if="basicPreloader"/>
      <template v-else>
        <router-view :key="$route.fullPath"/>
      </template>

      <Footer/>
    </template>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import api from "@/api";

export default {
  name: 'App',
  components: {
    LoaderHome: () => import('@/components/loader/home'),
    Header: () => import('@/components/layouts/header'),
    Footer: () => import('@/components/layouts/footer'),
  },
  data: () => ({
    basicPreloader: true,
    categories: []
  }),
  computed: {
    ...mapGetters('preloader', ['isPreloaderActive'])
  },
  methods: {
    ...mapActions('about', ['getAbout']),
    ...mapActions('contacts', ["getContacts"]),
    ...mapActions('products', ['getProducts']),
    ...mapActions('socialProfiles', ['getSocialProfiles']),
    ...mapActions('auth', ['getAuthUser']),
    ...mapMutations('preloader', ['setPreloader']),

    async getCategories() {
      const {data} = await api.categories.get({
        populate: ['categories', 'category'],
        filters: {
          category: {
            id: {
              "$null": true
            }
          }
        }
      })
      this.categories = data.data.map(item => {
        item = item.attributes
        if (item.categories) {
          item.categories = item.categories.data.map(category => {
            category = {
              id: category.id,
              ...category.attributes
            }
            return category
          })
        }
        return item
      })
    },
  },
  mounted() {
    this.basicPreloader = true
    Promise.all([
      this.getAbout(),
      this.getContacts(),
      this.getProducts(),
      this.getSocialProfiles(),
      this.getAuthUser(),
      this.getCategories()
    ]).finally(() => {
      this.basicPreloader = false
    })
  }

}
</script>

<style>

</style>