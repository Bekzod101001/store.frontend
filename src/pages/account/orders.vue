<template>
  <div
      class="pages"
      v-if="pageLoaded"
  >
    <div class="orders__row">
      <div
          v-for="(order, index) in computedOrders"
          :key="index"
          class="orders__item"
      >
        <div class="orders__item__details">
          <h2 class="orders__item__details__title">
            {{ $t('order.detail.title') }}
          </h2>
          <p>
            <strong>{{ $t('order.detail.created') }}:</strong>
            {{ dateFormatter(order.createdAt, true) }}
          </p>
          <p>
            <strong>{{ $t('title.totalPrice') }}:</strong>
            {{ sumFormatter(order.total_price) }}
          </p>
        </div>
        <table class="orders__table">
          <thead>
          <tr>
            <th
                v-for="(column, columnIndex) in columns"
                :key="columnIndex"
            >
              {{ column }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item, itemIndex) in order.carts"
              :key="itemIndex"
          >
            <td>
              <router-link :to="{
                name: 'Product Single',
                params: {
                  categoryId: item.product.data.attributes.category.data.id,
                  productId: item.product.data.id
                }
              }">
                {{ item.product.data.attributes.name }}
              </router-link>
            </td>
            <td>{{ item.amount }}</td>
            <td>{{ sumFormatter(item.product.data.attributes.price) }}</td>
            <td>{{ calculateDiscount(item.product.data.attributes.price, item.product.data.attributes.discount_percent) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import api from "@/api";
import {mapGetters, mapMutations} from "vuex";
import {dateFormatter, sumFormatter} from "@/utils/helper";

export default {
  name: "accountOrders",
  data: () => ({
    orders: {},
    credentials: {
      email: '',
      password: ''
    },
    pageLoaded: false,
    isRememberMeActive: false
  }),
  computed: {
    ...mapGetters('auth', ['userID']),

    columns() {
      return [
        this.$t('productName'),
        this.$t('amount'),
        this.$t('price'),
        this.$t('shopping.sale'),
      ]
    },

    computedOrders() {
      if (!this.orders.data) return []
      const modified = []
      this.orders.data.map(item => {
        modified.push({
          id: item.id,
          ...item.attributes
        })
      })
      return modified
    }
  },
  methods: {
    ...mapMutations('preloader', ['setPreloader']),

    sumFormatter,
    dateFormatter,

    signIn() {
      this.$store.dispatch('auth/signIn', this.credentials)
    },

    calculateDiscount(price, percent) {
      if (percent) {
        const discount = price / 100 * percent
        return this.sumFormatter(price - discount)
      }
      return '-'
    },

    async getOrders() {
      const {data} = await api.order.get({
        populate: ['carts.product.category'],
        filters: {
          user: {
            id: {
              $eq: this.userID
            }
          }
        }
      })

      this.orders = data
      this.pageLoaded = true
    }
  },
  mounted() {
    this.setPreloader(true)
    this.getOrders()
        .finally(() => {
          this.setPreloader(false)
        })
  }
}
</script>