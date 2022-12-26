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
              <router-link to="">
                {{ computedProducts.length ? computedProducts[0].category.data.attributes.name : $t('products.menus.product') }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="pages-title">
          <h2>
            {{ $t('products.title') }}
            <span>({{computedProducts.length}})</span>
          </h2>
        </div>
        <div class="products-wrapper">
          <div class="products-filter">
            <div class="products-filter__item">
              <h2>{{ $t('price') }}</h2>
              <a-row
                  type="flex"
                  :gutter="[16, 16]"
              >
                <a-col
                    :sm="24"
                    :xs="24"
                >
                  <label for="">{{ $t('products.filter.from') }}</label>
                  <a-input
                      type="number"
                      v-model.number="filter.price.min"
                  />
                </a-col>
                <a-col
                    :sm="24"
                    :xs="24"
                >
                  <label for="">{{ $t('products.filter.to') }}</label>
                  <a-input
                      type="number"
                      v-model.number="filter.price.max"
                  />
                </a-col>
              </a-row>
            </div>
            <div class="products-filter__item">
              <h2>{{ $t('productName') }}</h2>
              <div>
                <a-input
                    type="text"
                    v-model="filter.search"
                />
              </div>
            </div>
            <a-button
                block
                style="margin-top: 15px"
                :disabled="isProductsLoading"
                :loading="isFiltering"
                @click="filterProducts"
            >
              Filtrlash
            </a-button>
          </div>
          <div class="products-list">
            <div class="products-list-header">
              <div class="products-list-header-filter">
                <a-dropdown placement="bottomCenter">
                  <a-button>
                    {{ sortBy && sortBy === 'DESC' ? $t('products.filter.high') : sortBy === 'ASC' ? $t('products.filter.low') : $t('products.filter.byPrice') }}
                    <i class="icon-angle-down" />
                  </a-button>
                  <div
                      class="dropdown-options"
                      slot="overlay"
                  >
                    <ul>
                      <li @click="changeSortBy('DESC')">
                        <span>{{ $t('products.filter.high') }}</span>
                      </li>
                      <li @click="changeSortBy('ASC')">
                        <span>{{ $t('products.filter.low') }}</span>
                      </li>
                    </ul>
                  </div>
                </a-dropdown>
              </div>
              <div class="products-list-header-count">
                <a-dropdown placement="bottomCenter">
                  <a-button
                      :disabled="isProductsLoading"
                  >
                    <span>{{ pagination.pageSize }}</span>
                    <i class="icon-angle-down"></i>
                  </a-button>
                  <div
                      class="dropdown-options"
                      slot="overlay"
                  >
                    <ul>
                      <li
                          v-for="perPage in perPages"
                          :key="perPage"
                          @click="changePerPage(perPage)"
                      >
                        <span>{{ perPage }}</span>
                      </li>
                      <li>
                        <span>{{ $t('products.button.amount') }}</span>
                      </li>
                    </ul>
                  </div>
                </a-dropdown>
              </div>
            </div>
            <progress-linear v-if="isProductsLoading" />
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
                  :loading="isProductsLoading"
                  @paginate="changePage"
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
import ProgressLinear from "@/components/ui/progressLinear/progressLinear.vue";

export default {
  components: {
    ProgressLinear,
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
        price: {}
      },
      isFiltering: false,
      products: {},
      sortBy: '',
      perPages: [10, 20, 30],
      pagination: {
        pageSize: 10,
        page: 1
      },
      isProductsLoading: false
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

        if (item.discount_percent) {
          item.oldPrice = JSON.parse(JSON.stringify(item.price))
          item.discount = item.oldPrice / 100 * item.discount_percent
          item.price = item.oldPrice - item.discount
        }

        const foundItem = this.productsInBasket.find(i => i.id === item.id)
        if (foundItem) {
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
      this.isProductsLoading = true

      try {
        const {data} = await api.products.get({
          populate: ['images', 'category'],
          filters: {
            price: {
              $lte: this.filter.price?.max ? this.filter.price?.max : null,
              $gte: this.filter.price?.min ? this.filter.price?.min : null
            },
            name: {
              $contains: this.$route.query.search ? this.$route.query.search : this.filter.search ? this.filter.search : null
            },
            category: this.$route.params.categoryId ? this.$route.params.categoryId : null
          },
          sort: {
            price: this.sortBy ? this.sortBy : null
          },
          pagination: this.pagination
        })
        this.products = data
      } catch (e) {
        this.$message.error(e.message)
      }

      this.isProductsLoading = false
    },

    async filterProducts() {
      this.isFiltering = true
      await this.getProducts()
      this.isFiltering = false
    },

    changeSortBy (value) {
      this.sortBy = value
      this.getProducts()
    },

    changePerPage(value) {
      this.pagination.pageSize = +value
      this.getProducts()
    },

    changePage(newPage) {
      this.pagination.page = newPage
      this.getProducts()
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style>

</style>