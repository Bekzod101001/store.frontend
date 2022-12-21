<template>
  <div
      v-if="computedProduct.id"
      class="pages products-detail"
  >
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-breadcrumbs">
          <ul>
            <li>
              <i class="icon-home"></i>
              <router-link
                  :to="{
                name: 'Category Single',
                params: {
                  categoryId: computedProduct.category.id
                }
              }"
              >
                {{ computedProduct.category.name }}
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                {{ computedProduct.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="products-detail-header">
          <h2>{{ computedProduct.title }}</h2>

          <div
              v-if="computedProduct.reviews?.length"
              class="products-detail-header-bottom"
          >
            <div class="products-detail-header-bottom-mark">
              <Mark :value="computedTotalAverageStars"/>
            </div>
            <div class="products-detail-header-bottom-comment">
              <i class="icon-comment"/>
              <span>{{ $t('title.commentsCount', {num: computedProduct.reviews.length}) }}</span>
            </div>
          </div>
        </div>
        <div class="products-detail-body">
          <div class="products-detail-body-tab">
            <div class="products-detail-body-tab-items">
              <ul v-if="computedProduct.images">
                <li
                    v-for="(image, index) in computedProduct.images"
                    :key="index"
                    @click="onClickTab(index)"
                >
                  <img
                      :src="image"
                      :alt="computedProduct.title"
                  >
                </li>
              </ul>
            </div>
            <div class="products-detail-body-tab-image">
              <img
                  v-if="computedProduct.images"
                  :src="computedProduct.images[activeImageIndex]"
                  :alt="computedProduct.title"
              >
            </div>
          </div>
          <div class="products-detail-body-info">
            <div class="products-detail-body-info-header">
              <h2>{{computedProduct.name}}</h2>
              <small v-if="computedProduct.oldPrice">
                {{ sumFormatter(computedProduct.oldPrice) }} {{ $t('sum') }}
              </small>
              <b>{{ sumFormatter(computedProduct.price) }} {{ $t('sum') }}</b>
              <span :class="{ 'red': !computedProduct.in_stock }">
                        <i class="icon-shop"/>
                        {{ computedStock }}
                      </span>
              <a-row
                  type="flex"
                  :gutter="[{ xl: 20, xs: 16, sm: 16 }, 0]"
              >
                <a-col span="24">
                  <a-button
                      v-if="(computedProduct.amount === 0)"
                      @click="addToBasket"
                      :disabled="!computedProduct.in_stock"
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

                    <span> {{ computedProduct.amount }} </span>

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
                  v-for="property in computedProduct.dynamic_properties"
                  :key="property.id"
              >
                <small>{{ property.key }}</small>
                <i></i>
                <span>{{ property.value }}</span>
              </li>
            </ul>
            <h3>{{ $t('products.detail.title') }}</h3>
            <p>{{ computedProduct.small_description }}</p>
          </div>
        </div>
        <div class="products-detail-recommend">
          <h2>{{ $t('products.detail.recomend') }}</h2>
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
              <ProductCard
                  :info="item"
                  class="swiper-slider__card"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="products-detail-about">
          <h2>Tavsif</h2>
          <p>{{ computedProduct.description }}</p>
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
                  {{ $t('products.detail.comment') }}
                </h2>
                <ul v-if="computedProduct.reviews?.length">
                  <li
                      v-for="(review, index) in computedProduct.reviews"
                      :key="index"
                  >
                    <div class="products-detail-comment-left-header">
                      <h3>
                        {{ review.user?.data?.attributes?.firstName }}
                        {{ review.user?.data?.attributes?.lastName }}
                      </h3>
                      <span>{{ dateFormatter(review.createdAt) }}</span>
                      <Mark :value="review.rating"/>
                    </div>
                    <div class="products-detail-comment-left-body">
                      <p>{{ review.comment }}</p>
                    </div>
                  </li>
                </ul>
                <i v-else>Izohlar yo'q</i>
              </div>
            </a-col>
            <a-col
                :xl="6"
                :lg="8"
                :xs="24"
                :sm="24"
            >
              <div
                  class="products-detail-comment-right"
              >
                <div
                    v-if="computedProduct.reviews?.length"
                    class="products-detail-comment-right-header"
                >
                  <Mark :value="computedTotalAverageStars"/>
                  <span>{{ computedTotalAverageStars }}/5</span>
                </div>
                <ul v-if="computedProduct.reviews?.length">
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
                <a-button
                    v-if="isLoggedIn"
                    @click="showModal"
                >
                  <i class="icon-comment"></i>
                  {{ $t('products.detail.commenting') }}
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
          <span>{{ $t('products.detail.rating') }}:</span>
          <Mark v-model="newReview.rating"/>
        </div>
        <a-form-item label="Izoh:">
          <a-textarea
              v-model="newReview.comment"
              placeholder="Izoh qoldiring"
          />
        </a-form-item>
        <a-button
            @click="handleOk"
            :loading="confirmLoading"
        >
          {{ $t('products.detail.sending') }}
        </a-button>
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
          disableOnInteraction: true
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
      isReviewSubmitBtnLoading: false
    }
  },
  computed: {
    ...mapGetters("products", ["recommendList"]),
    ...mapGetters('basket', ['productsInBasket']),
    ...mapGetters('auth', ['userID', 'isLoggedIn']),
    ...mapState('preloader', ['isPreloaderActive']),

    computedStock() {
      return this.computedProduct.in_stock ? 'Sotuvda mavjud' : 'Sotuvda mavjud emas'
    },

    computedTotalStars() {
      if (!this.computedProduct.reviews) return 0
      let totalStars = 0
      this.computedProduct.reviews.map(item => {
        totalStars += item.rating
      })
      return totalStars
    },

    computedTotalAverageStars() {
      if (!this.computedProduct.reviews) return 0
      return Math.round(this.computedTotalStars / this.computedProduct.reviews.length)
    },

    computedStarsList() {
      if (!this.computedProduct.reviews) return 0
      return [
        this.calculateEqualRatings(1),
        this.calculateEqualRatings(2),
        this.calculateEqualRatings(3),
        this.calculateEqualRatings(4),
        this.calculateEqualRatings(5),
      ].reverse()
    },

    computedProduct() {
      if (!this.detail.id) return {}

      const newProd = {
        id: this.detail.id,
        amount: 0,
        ...this.detail.attributes
      }

      const images = strapiFileUrlRetriever(this.detail, 'images')
      newProd.images = images.map(image => process.env.VUE_APP_BASE_URL + image)

      newProd.category = {
        id: newProd.category.data.id,
        name: newProd.category.data.attributes.name
      }

      this.productsInBasket.filter(item => {
        if (item.id === newProd.id) newProd.amount = item.amount
      })

      if (newProd.discount_percent) {
        newProd.oldPrice = newProd.price
        newProd.discount = newProd.oldPrice / 100 * newProd.discount_percent
        newProd.price = newProd.oldPrice - newProd.discount
      }

      const dataReviews = newProd.reviews.data;
      if (dataReviews.length > 0) {
        newProd.reviews = dataReviews.map(item => {
          return {
            id: item.id,
            ...item.attributes
          }
        })
      } else {
        newProd.reviews = [];
      }

      return newProd
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
      if (!this.newReview.comment) return this.$message.error(this.$t('fill'))
      this.confirmLoading = true;
      this.newReview.user = String(this.userID)
      this.newReview.product = this.$route.params.productId
      await api.reviews.post({data: this.newReview})
          .then(({data}) => {
            const modifiedObj = JSON.parse(JSON.stringify(data.data))
            modifiedObj.attributes = {
              ...modifiedObj.attributes,
              user: {
                data: {
                  attributes: {
                    firstName: this.$t('yourReview')
                  }
                }
              }
            }
            this.detail.attributes.reviews.data.unshift(modifiedObj)
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
      if (!this.computedProduct.amount) this.computedProduct.amount++
      this.setProduct(this.computedProduct)
    },

    changeAmount(operation) {
      if (operation === 'minus') {
        if (this.computedProduct.amount) this.computedProduct.amount--
      } else if (operation === 'plus') {
        this.computedProduct.amount++
      }

      this.setAmount({
        id: this.computedProduct.id,
        amount: this.computedProduct.amount
      })
    },

    async getProduct() {
      const {data} = await api.products.getSingle(this.$route.params.productId, {
        populate: ['images', 'category', 'dynamic_properties', 'reviews.user'],
        sort: ['reviews.createdAt:desc']
      })
      this.detail = data.data
    },

    calculateEqualRatings(val) {
      let totalSum = 0
      this.computedProduct.reviews.filter(item => {
        if (item.rating === +val) totalSum++
      })

      if (this.maxStarValue < totalSum) this.maxStarValue = totalSum

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