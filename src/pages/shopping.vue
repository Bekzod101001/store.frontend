<template>
  <main class="pages shopping">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-breadcrumbs">
          <ul>
            <li>
              <i class="icon-home"></i>
              <router-link to="/">
                {{ $t('navigation.main') }}
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                {{ $t('navigation.basket') }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="pages-title">
          <h2>
            {{ $t('navigation.main') }}
            <span>({{ totalProductsAmount }})</span>
          </h2>
        </div>
        <div class="shopping-outside">
          <a-row type="flex" :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]">
            <a-col :lg="18" :md="24" :sm="24" :xs="24">
              <div class="shopping-wrapper">
                <div class="shopping-body">
                  <Card v-for="item in productsInBasket" :key="item.id" :info="item" />
                </div>
              </div>
            </a-col>
            <a-col :lg="6" :md="12" :sm="12" :xs="24">
              <div class="shopping-sidebar">
                <a-button
                    v-if="isLoggedIn"
                    @click="makeOrder"
                >
                  {{ $t('shopping.order') }}
                </a-button>
                <ul>
                  <li>
                    <b>{{ $t('shopping.amount') }}:</b>
                    <b>{{ sumFormatter(totalSum) }} UZS</b>
                  </li>
                  <li>
                    <span>{{ $t('shopping.sale') }}:</span>
                    <small>
                      <template v-if="totalSale">
                        -{{ sumFormatter(totalSale) }}
                      </template>
                      <template v-else>
                        0
                      </template>
                      UZS</small>
                  </li>
                  <li>
                    <span>{{ $t('shopping.amountProducts') }}:</span>
                    <span>{{ sumFormatter(totalProductsAmount) }} ta</span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { sumFormatter } from "@/utils/helper";
import api from "@/api";

export default {
  components: {
    Card: () => import("@/components/cards/shopping")
  },
  computed: {
    ...mapGetters("basket", ["totalSum", "totalSale", "totalProductsAmount", "productsInBasket"]),
    ...mapGetters('auth', ['isLoggedIn', 'userID'])
  },
  methods: {
    sumFormatter,

    async makeOrder () {
      const Cart = this.productsInBasket.map(item => {
        item = {
          product: {
            data: {
              id: item.id
            }
          },
          amount: item.amount
        }
        return item
      })

      await api.order.post({
        data: {
          users_permissions_user: this.userID,
          comment: '',
          total_price: this.totalSum,
          Cart
        }
      })

    }
  }
}
</script>

<style>

</style>