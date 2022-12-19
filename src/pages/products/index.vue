<template>
  <main class="pages products">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-breadcrumbs">
          <ul>
            <li>
              <i class="icon-home"></i>
              <router-link to="/">
                {{ $t('products.menus.main') }}
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link
                  :to="{
                name: 'products'
              }"
              >
                {{ $t('products.menus.product') }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="pages-title">
          <h2>
            {{ $t('products.title') }}
            <span>(124)</span>
          </h2>
        </div>
        <div class="products-wrapper">
          <div class="products-filter">
            <h2>Narxi</h2>
            <a-row
                type="flex"
                :gutter="[16, 16]"
            >
              <a-col
                  :sm="24"
                  :xs="24"
              >
                <label for="">{{ $t('products.filter.from') }}</label>
                <a-input/>
              </a-col>
              <a-col
                  :sm="24"
                  :xs="24"
              >
                <label for="">{{ $t('products.filter.to') }}</label>
                <a-input/>
              </a-col>
            </a-row>
          </div>
          <div class="products-list">
            <div class="products-list-header">
              <div class="products-list-header-filter">
                <a-dropdown placement="bottomCenter">
                  <a-button>{{ $t('products.filter.byPrice') }}<i class="icon-angle-down"></i></a-button>
                  <div
                      class="dropdown-options"
                      slot="overlay"
                  >
                    <ul>
                      <li>
                        <span>{{ $t('products.filter.high') }}</span>
                      </li>
                      <li>
                        <span>{{ $t('products.filter.low') }}</span>
                      </li>
                    </ul>
                  </div>
                </a-dropdown>
              </div>
              <div class="products-list-header-count">
                <a-dropdown placement="bottomCenter">
                  <a-button>
                    <span>20</span>
                    <i class="icon-angle-down"></i>
                  </a-button>
                  <div
                      class="dropdown-options"
                      slot="overlay"
                  >
                    <ul>
                      <li>
                        <span>10</span>
                      </li>
                      <li>
                        <span>20</span>
                      </li>
                      <li>
                        <span>30</span>
                      </li>
                      <li>
                        <span>40</span>
                      </li>
                      <li>
                        <span>{{ $t('products.button.amount') }}</span>
                      </li>
                    </ul>
                  </div>
                </a-dropdown>
              </div>
            </div>
            <div class="products-list-body">
              <a-row
                  type="flex"
                  :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
              >
                <template v-if="layout == 'vertical'">
                  <a-col
                      v-for="item in computedProducts"
                      :key="item.id"
                      :xxl="6"
                      :xl="8"
                      :md="12"
                      :sm="12"
                      :xs="24"
                  >
                    <ProductCardVertical :info="item"/>
                  </a-col>
                </template>
                <template v-else>
                  <a-col
                      v-for="item in computedProducts"
                      :key="item.id"
                      :xxl="12"
                      :xs="24"
                      :sm="24"
                  >
                    <ProductCardHorizontal :info="item"/>
                  </a-col>
                </template>
              </a-row>
            </div>
            <div class="pages-pagination products-list-pagination">
              <Pagination
                  v-if="products.meta"
                  :page="products.meta.pagination.page"
                  :count="products.meta.pagination.pageCount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import api from "@/api";
import {strapiFileUrlRetriever} from "@/utils/helper";
import {mapGetters} from "vuex";

export default {
  components: {
    ProductCardVertical: () => import('@/components/cards/vertical'),
    ProductCardHorizontal: () => import('@/components/cards/horizontal'),
    Pagination: () => import('@/components/custom/pagination')
  },
  data() {
    return {
      layout: 'vertical',
      activeKeys: [],
      activeKeysInside: [],
      filter: {
        menu: {
          id: 2,
          title: this.$t('products.menus.books'),
          link: "/",
          icon: 'menu2',
          child: [
            {
              id: 1,
              title: this.$t('products.menus.artist'),
              link: "/"
            },
            {
              id: 2,
              title: this.$t('products.menus.religion'),
              link: "/",
              child: [
                {
                  id: 1,
                  title: this.$t('products.menus.fiqh'),
                  link: "/"
                },
                {
                  id: 2,
                  title: this.$t('products.menus.aqeed'),
                  link: "/"
                },
                {
                  id: 3,
                  title: this.$t('products.menus.siyrat'),
                  link: "/"
                },
                {
                  id: 4,
                  title: this.$t('products.menus.companions'),
                  link: "/"
                },
                {
                  id: 5,
                  title: this.$t('products.menus.hadith'),
                  link: "/"
                },
                {
                  id: 6,
                  title: this.$t('products.menus.dua'),
                  link: "/"
                },
                {
                  id: 7,
                  title: this.$t('products.menus.mental'),
                  link: "/"
                },
                {
                  id: 8,
                  title: this.$t('products.menus.class'),
                  link: "/"
                },

              ]
            },
            {
              id: 3,
              title: this.$t('products.menus.business'),
              link: "/"
            },
            {
              id: 4,
              title: this.$t('products.menus.kids'),
              link: "/"
            },
            {
              id: 5,
              title: this.$t('products.menus.business'),
              link: "/"
            },
            {
              id: 6,
              title: this.$t('products.menus.foreign'),
              link: "/"
            },

          ]
        },
      },
      products: {}
    }
  },
  computed: {
    ...mapGetters('basket', ['productsInBasket']),

    computedProducts() {
      if (!this.products.data) return []

      const modifiedObj = this.products.data.map(item => {
        const images = strapiFileUrlRetriever(item, 'images')
        item = {
          id: item.id,
          ...item.attributes
        }
        item.images = images.map(image => process.env.VUE_APP_BASE_URL + image)
        delete item.attributes

        if(item.discount_percent) {
          item.oldPrice = JSON.parse(JSON.stringify(item.price))
          item.discount = item.oldPrice / 100 * item.discount_percent
          item.price = item.oldPrice - item.discount
        }

        const foundItem = this.productsInBasket.find(i => i.id === item.id)
        if(foundItem) {
           item.amount = foundItem.amount
        } else {
          item.amount = 0
        }

        return item
      })

      return modifiedObj
    }
  },
  methods: {
    async getProducts() {
      const {data} = await api.products.get({
        populate: ['images', 'category']
      })
      this.products = data
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style>

</style>