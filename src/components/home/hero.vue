<template>
  <section class="hero">
    <div class="container">
      <div class="hero-wrapper">
        <a-row
            type="flex"
            :gutter="[{ lg: 24, md: 16, xs: 16 }, {md: 0, sm: 16, xs: 16}]"
        >
          <a-col
              :md="18"
              :sm="24"
              :xs="24"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
          >
            <div class="hero-slider">
              <swiper :options="sliderOptions">
                <swiper-slide
                    v-for="(banner, index) in banners"
                    :key="index"
                >
                  <div class="hero-slider-item">
                    <div class="hero-slider-item-info">
                      <h1>{{banner.title}}</h1>
<!--                      <p>Butun dunyo bo‘ylab yetkazib berish xizmati mavjud.</p>-->
                      <a-button :href="banner.btn_url">
                        {{ banner.btn_label }}
                      </a-button>
                    </div>
                    <div class="hero-slider-item-image">
                      <img
                          src="@/assets/images/hero-slider1.png"
                          alt="books"
                      >
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="hero-slider-pagination swiper-pagination"></div>
              <div class="hero-slider-action">
                <i class="icon-angle-slider-right"></i>
                <i class="icon-angle-slider-left"></i>
              </div>
            </div>
          </a-col>
          <a-col
              :sm="24"
              :md="6"
              :xs="24"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="300"
          >
            <div class="hero-banner">
              <img
                  src="@/assets/images/hero-banner.jpg"
                  alt="banner"
              >
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";

export default {
  data: () => ({
    sliderOptions: {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.icon-angle-slider-left',
        prevEl: '.icon-angle-slider-right'
      },
      loop: true,
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false
      // },
    },
    banners: [
      {
        btn_label: '',
        btn_url: '',
        title: ''
      }
    ]
  }),
  methods: {
    async getBanners () {
      const {data} = await api.banners.get()
      this.banners = data.data.map(item => {
        item = item.attributes
        return item
      })
    }
  },
  mounted() {
    this.getBanners()
  }

}
</script>

<style>

</style>