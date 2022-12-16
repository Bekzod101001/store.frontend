<template>
  <section
      class="useful"
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-delay="500"
  >
    <div class="container">
      <div class="useful-wrapper">
        <div class="useful-header">
          <h2>Azon loyihalari</h2>
        </div>
        <div class="useful-body">
          <swiper :options="usefulOptions">
            <swiper-slide
                v-for="item in projects"
                :key="item.id"
            >
              <a
                  href="#!"
                  class="useful-body-card"
              >
                <img
                    :src="item.image"
                    alt="useful"
                >
              </a>
            </swiper-slide>
          </swiper>
        </div>
        <div class="useful-footer">
          <i class="icon-arrow-right"></i>
          <i class="icon-arrow-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import {strapiRetriever} from "@/utils/helper";

export default {
  data() {
    return {
      usefulOptions: {
        // slidesPerView: 6,
        navigation: {
          nextEl: '.icon-arrow-left',
          prevEl: '.icon-arrow-right'
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // spaceBetween: 24,
        breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 24
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16

          },
          576: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 16
          },
        }
      },
      projects: []
    }
  },
  computed: {
  },
  methods: {
    async getAzonProjects () {
      const {data} = await api.azonProjects.get({
        populate: 'logo'
      })
      this.projects = data.data.map(project => {
        project.image = process.env.VUE_APP_BASE_URL + strapiRetriever(project, 'logo')
        return project
      })
    }
  },
  mounted() {
    this.getAzonProjects()
  }
}
</script>

<style>

</style>