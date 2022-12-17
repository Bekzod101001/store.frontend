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
                      <img :src="banner.image">
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
                  :src="featuredAd"
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

export default {
  props: {
    banners: {
      type: Array,
      default: () => [
        {
          btn_label: '',
          btn_url: '',
          title: '',
          image: ''
        }
      ]
    },
    featuredAd: String
  },
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
    }
  })
}
</script>

<style>

</style>