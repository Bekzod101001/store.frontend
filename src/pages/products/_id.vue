<template>
  <div
      class="pages products-detail"
      v-if="isLoaded"
  >
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-breadcrumbs">
          <ul>
            <li>
              <i class="icon-home"></i>
              <router-link to="/">
                Bosh sahifa
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                Kitoblar
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>

              <router-link to="/">
                Diniy
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                Fiqhga oid
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                {{ detail.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="products-detail-header">
          <h2>{{ detail.title }}</h2>

          {{detail.reviews}}
          <div
              v-if="detail.reviews.length"
              class="products-detail-header-bottom"
          >
            <div class="products-detail-header-bottom-mark">
              <Mark :value="3"/>
              <span>{{ detail.mark }}</span>
            </div>
            <div class="products-detail-header-bottom-comment">
              <i class="icon-comment"/>
              <span>{{ $t('title.commentsCount', {num: 32}) }}</span>
            </div>
          </div>
        </div>
        <div class="products-detail-body">
          <div class="products-detail-body-tab">
            <div class="products-detail-body-tab-items">
              <ul v-if="detail.images">
                <li
                    v-for="(image, index) in detail.images"
                    :key="index"
                    @click="onClickTab(index)"
                >
                  <img
                      :src="image"
                      :alt="detail.title"
                  >
                </li>
              </ul>
            </div>
            <div class="products-detail-body-tab-image">
              <img
                  v-if="detail.images"
                  :src="detail.images[activeImageIndex]"
                  :alt="detail.title"
              >
            </div>
          </div>
          <div class="products-detail-body-info">
            <div class="products-detail-body-info-header">
              <small>{{ sumFormatter(detail.oldPrice) }} {{ $t('sum') }}</small>
              <b>{{ sumFormatter(detail.price) }} {{ $t('sum') }}</b>
              <span :class="{'red': !detail.in_stock}">
                <i class="icon-shop"/>
                {{ computedStock }}
              </span>
              <a-row
                  type="flex"
                  :gutter="[{ xl: 20, xs: 16, sm: 16 }, 0]"
              >
                <a-col span="24">
                  <a-button
                      @click="addToBasket"
                      v-if="(detail.amount === 0)"
                  >
                    {{ $t('button.addCart') }}
                  </a-button>
                  <button
                      class="btn-calculating"
                      v-else
                  >
                    <i
                        class="icon-minus"
                        @click.prevent="changeAmount('minus')"
                    />

                    <span> {{ detail.amount }} </span>

                    <i
                        class="icon-plus"
                        @click.prevent="changeAmount('plus')"
                    />
                  </button>
                </a-col>
              </a-row>
            </div>
            <ul>
              <li
                  v-for="property in detail.dynamic_properties"
                  :key="property.id"
              >
                <small>{{ property.key }}</small>
                <i></i>
                <span>{{ property.value }}</span>
              </li>
            </ul>
            <h3>Kitob haqida</h3>
            <p>{{ detail.small_description }}</p>
          </div>
        </div>
        <div class="products-detail-recommend">
          <h2>Tavsiya etiladi</h2>
          <!-- <div class="products-detail-recommend-row">
              <div class="products-detail-recommend-col" v-for="(item, index) in recommendList" :key="item.id"
                  data-aos="flip-left" data-aos-duration="300" :data-aos-delay="index * 100 + 500">
              </div>
          </div> -->
          <swiper :options="recommendOptions">
            <swiper-slide
                v-for="item in recommendList"
                :key="item.id"
            >
              <ProductCard :info="item"/>
            </swiper-slide>
          </swiper>
        </div>
        <div class="products-detail-about">
          <h2>Tavsif</h2>
          <p>{{ detail.description }}</p>
        </div>
        <div class="products-detail-comment">
          <a-row
              type="flex"
              :gutter="[{ xl: 24, sm: 16, xs: 16 }, { lg: 0, sm: 16, xs: 16 }]"
          >
            <a-col
                :xl="18"
                :lg="16"
                :sm="24"
                :xs="24"
            >
              <div class="products-detail-comment-left">
                <h2>
                  Mahsulot haqida izohlar
                </h2>
                <ul v-if="detail?.reviews?.length">
                  <li
                      v-for="(review, index) in detail.reviews"
                      :key="index"
                  >
                    <div class="products-detail-comment-left-header">
                      <h3>{{ review.name }}</h3>
                      <span>{{ dateFormatter(review.createdAt) }}</span>
                      <Mark :value="review.rating"/>
                    </div>
                    <div class="products-detail-comment-left-body">
                      <p>{{ review.comment }}</p>
                    </div>
                  </li>
                </ul>
                <i>Izohlar yo'q</i>
              </div>
            </a-col>
            <a-col
                v-if="detail.reviews.length"
                :xl="6"
                :lg="8"
                :xs="24"
                :sm="24"
            >
              <div class="products-detail-comment-right">
                <div class="products-detail-comment-right-header">
                  <Mark :value="computedTotalAverageStars"/>
                  <span>{{computedTotalAverageStars}}/5</span>
                </div>
                <ul>
                  <li
                      v-for="(item, index) in computedStarsList"
                      :key="index"
                  >
                    <small>{{ 5 - index }} yulduz</small>
                    <i>
                      <span :style="{width: 100 / maxStarValue * item + '%'}"/>
                    </i>
                    <small>{{ item }}</small>
                  </li>
                </ul>
                <a-button @click="showModal">
                  <i class="icon-comment"></i>
                  Izoh qoldirish
                </a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <a-modal
        class="mark-modal"
        title="Izoh qoldirish"
        :visible="visible"
        :confirm-loading="confirmLoading"
        :footer="null"
        @cancel="handleCancel"
    >
      <template #closeIcon>
        <i class="icon-close"></i>
      </template>
      <div class="mark-modal-body">
        <div class="mark-modal-mark">
          <span>Umumiy baho:</span>
          <Mark
              v-model="newReview.rating"
          />
        </div>
        <a-form-item label="Izoh:">
          <a-textarea
              v-model="newReview.comment"
              placeholder="Izoh qoldiring"
          />
        </a-form-item>
        <a-button @click="handleOk">Yuborish</a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';
import api from "@/api";
import {dateFormatter, strapiFileUrlRetriever, sumFormatter} from "@/utils/helper";
import Mark from '@/components/custom/mark'
import ProductCard from '@/components/cards/vertical'

export default {
  components: {Mark, ProductCard},
  data() {
    return {
      visible: false,
      confirmLoading: false,
      added_count: 0,
      recommendOptions: {
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
          1752: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1552: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 16

          },
          992: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 'auto',
            spaceBetween: 16
          },
        }
      },
      detail: {
        amount: 0
      },
      activeImageIndex: 0,
      newReview: {
        rating: 0,
        comment: ''
      },
      maxStarValue: 0,
      isLoaded: false,
    }
  },
  computed: {
    ...mapGetters("products", ["recommendList"]),
    ...mapGetters('basket', ['productsInBasket']),
    ...mapGetters('auth', ['userID']),
    ...mapState('preloader', ['isPreloaderActive']),

    computedStock() {
      return this.detail.in_stock ? 'Sotuvda mavjud' : 'Sotuvda mavjud emas'
    },

    computedTotalStars () {
      if(!this.detail || !this.detail.reviews) return 0
      let totalStars = 0
      this.detail.reviews.map(item => {
        totalStars += item.rating
      })
      return totalStars
    },

    computedTotalAverageStars () {
      if(!this.detail || !this.detail.reviews) return 0
      return Math.round(this.computedTotalStars / this.detail.reviews.length)
    },

    computedStarsList () {
      if(!this.detail.reviews?.length) return 0
      return [
        this.calculateEqualRatings(1),
        this.calculateEqualRatings(2),
        this.calculateEqualRatings(3),
        this.calculateEqualRatings(4),
        this.calculateEqualRatings(5),
      ].reverse()
    }
  },
  methods: {
    ...mapMutations('basket', ['setProduct', 'setAmount']),
    ...mapMutations('preloader', ['setPreloader']),

    sumFormatter,

    onClickTab(index) {
      this.activeImageIndex = index;
    },
    showModal() {
      this.visible = true;
    },
    async handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      this.newReview.user = String(this.userID)
      this.newReview.product = this.$route.params.id
      await api.reviews.post({data: this.newReview})
          .then(({data}) => {
            Object.keys(data.data.attributes).forEach(key => {
              data[key] = data.data.attributes[key]
            })
            delete data.data
            data.name = 'Ваш отзыв'

            this.reviews.unshift(data)
          })
          .finally(() => {
            this.visible = false;
            this.confirmLoading = false;
          })
    },
    handleCancel() {
      this.visible = false;
    },

    addToBasket() {
      if(!this.detail.amount) this.detail.amount++
      this.setProduct(this.detail)
    },

    changeAmount (operation) {
      if (operation === 'minus') {
        if(this.detail.amount) this.detail.amount--
      }
      else if (operation === 'plus') {
        this.detail.amount++
      }

      this.setAmount({
        id: this.detail.id,
        amount: this.detail.amount
      })
    },

    async getProduct() {
      await api.products.getSingle(this.$route.params.id, {
        populate: ['images', 'category', 'dynamic_properties', 'reviews']
      }).then(({data}) => {
        this.detail = {...this.detail, ...data.data.attributes}

        const images = strapiFileUrlRetriever(data.data, 'images')
        this.detail.images = images.map(image => process.env.VUE_APP_BASE_URL + image)
        this.detail.id = data.data.id

        this.productsInBasket.filter(item => {
          if(item.id === data.data.id) this.detail.amount = item.amount
        })

        if(this.detail.discount_percent) {
          this.detail.oldPrice = this.detail.price
          this.detail.discount = this.detail.oldPrice / 100 * this.detail.discount_percent
          this.detail.price = this.detail.oldPrice - this.detail.discount
        }

        const dataReviews = data.data.attributes.reviews.data;
        if(dataReviews.length > 0) {
          this.detail.reviews = dataReviews.map(item => {
            return {
              id: item.id,
              ...item.attributes
            }
          })
        }else {
          this.detail.reviews = [];
        }
        console.log(this.detail);
      })
    },

    calculateEqualRatings (val) {
      let totalSum = 0
      this.detail.reviews.filter(item => {
        if (item.rating === +val) totalSum++
      })

      if(this.maxStarValue < totalSum) this.maxStarValue = totalSum

      return totalSum
    },

    dateFormatter
  },
  mounted() {
    this.setPreloader(true)
    this.getProduct().finally(() => {
      this.setPreloader(false)
      this.isLoaded = true;
    })
  }
}
</script>

<style>

</style>