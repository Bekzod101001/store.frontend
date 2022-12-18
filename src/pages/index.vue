<template>
  <main class="home">
    <Hero
        :banners="banners"
        :featured-ad="featuredAd"
    />
    <Products/>
    <About/>
    <Useful :projects="azonProjects"/>
  </main>
</template>

<script>
import api from "@/api";
import {strapiFileUrlRetriever} from "@/utils/helper";
import {mapMutations} from "vuex";

export default {
  components: {
    About: () => import('@/components/home/about'),
    Hero: () => import('@/components/home/hero'),
    Products: () => import('@/components/home/products'),
    Useful: () => import('@/components/home/useful'),
  },
  data: () => ({
    banners: [],
    featuredAd: '',
    azonProjects: []
  }),
  methods: {
    ...mapMutations('preloader', ['setPreloader']),

    async getBanners() {
      const {data} = await api.banners.get({
        populate: 'image'
      })
      this.banners = data.data.map(item => {
        const image = strapiFileUrlRetriever(item, 'image')
        item = item.attributes
        item.image = process.env.VUE_APP_BASE_URL + image
        return item
      })
    },

    async getFeaturedAd() {
      const {data} = await api.featuredAd.get({
        populate: 'image'
      })
      this.featuredAd = process.env.VUE_APP_BASE_URL + strapiFileUrlRetriever(data.data, 'image')
    },

    async getAzonProjects () {
      const {data} = await api.azonProjects.get({
        populate: 'logo'
      })
      this.azonProjects = data.data.map(project => {
        project.image = process.env.VUE_APP_BASE_URL + strapiFileUrlRetriever(project, 'logo')
        return project
      })
    }
  },
  mounted() {
    this.setPreloader(true)

    Promise.all([
      this.getBanners(),
      this.getFeaturedAd(),
      this.getAzonProjects()
    ]).finally(() => {
      this.setPreloader(false)
    })
  }
}
</script>
  