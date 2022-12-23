<template>
  <div class="products">
    <div class="container">
      <div class="products-wrapper">
        <perfect-scrollbar
            class="products-header"
            data-aos="fade-down"
            data-aos-duration="300"
            data-aos-delay="600"
        >
          <a-button
              v-for="item in tab.list"
              :key="item.id"
              :class="{'active': tab.active?.id === item.id}"
              :loading="tab.active?.id === item.id && isProductsLoading"
              @click="onClickTab(item)"
          >
            {{ item.title }}
          </a-button>
        </perfect-scrollbar>
        <div class="products-body">
          <div
              class="products-body-col"
              v-for="(item, index) in products.data"
              :key="item.id"
              data-aos="flip-left"
              data-aos-duration="300"
              :data-aos-delay="index * 100 + 500"
          >
            <ProductCard :info="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import vertical from "@/components/cards/vertical.vue";
import api from "@/api";

const IS_RECOMMENDED = 'is_recommended'
const DATE_ASC = 'date_asc'
const DISCOUNT = 'discount'

export default {
  components: {ProductCard: vertical},
  data() {
    return {
      tab: {
        list: [
          {
            id: IS_RECOMMENDED,
            title: this.$t('home.recommended')
          },
          {
            id: DATE_ASC,
            title: this.$t('home.newItem')
          },
          {
            id: DISCOUNT,
            title: this.$t('home.sale')
          },
        ],
        active: {
          id: IS_RECOMMENDED,
          title: this.$t('home.recommended')
        }
      },
      isProductsLoading: false
    }
  },
  computed: {
    ...mapGetters("products", ["products"])
  },
  methods: {
    ...mapMutations('products', ['setProducts']),

    onClickTab(payload) {
      this.tab.active = payload;
      this.getProducts()
    },

    async getProducts() {
      this.isProductsLoading = true

      try {
        const {data} = await api.products.get({
          populate: ['images', 'category'],
          sort: this.tab.active?.id === DATE_ASC ? 'createdAt:asc' : null,
          filters: {
            is_recommended: this.tab.active?.id === IS_RECOMMENDED ? 1 : null,
            discount_percent: {
              $gt: this.tab.active?.id === DISCOUNT ? 0 : null
            }
          },
          pagination: {
            pageSize: 6
          }
        })
        this.setProducts(data)
      } catch (e) {
        this.$message.error(e.message)
      }

      this.isProductsLoading = false
    },
  },
  mounted() {
    this.getProducts()
  }
};
</script>

<style>

</style>
