<template>
  <router-link
      :to="{
        name: 'productsId',
        params: {
          id: product.id
        }
      }"
      class="card vertical"
  >
    <div class="card-tags">
      <span
          v-if="product.discount_percent"
          :class="{ discount: product.discount_percent }"
      >
        {{ product.discount_percent }} %
      </span>
      <span
          v-if="product.type"
          :class="product.type"
      >
        {{ computedType }}
      </span>
    </div>
    <div
        v-if="product.images"
        class="card-image"
    >
      <img
          :src="product.images[0]"
          :alt="product.name"
      />
    </div>
    <div class="card-info">
      <h3>{{ product.name }}</h3>
      <h4 v-if="product.category?.data">
        <i class="icon-document"/>
        {{ product.category.data.attributes.name }}
      </h4>
      <span>
        {{ sumFormatter(product.price) }} {{ $t('sum') }}
        <small v-if="product.oldPrice">
          {{ product.oldPrice }} {{ $t('sum') }}
        </small>
      </span>
      <!-- small chegirma uchun. -->
    </div>
    <div class="card-action">
      <a-button
          block
          v-if="(!product.amount)"
          @click.prevent="addToBasket()"
      >
        {{ $t('card.addBasket') }}
      </a-button>
      <button
          class="card-action-universal"
          @click.prevent
          v-else
      >
        <i
            class="icon-minus"
            @click.prevent="changeAmount('minus')"
        />

        <span> {{ product.amount }}</span>

        <i
            class="icon-plus"
            @click.prevent="changeAmount('plus')"
        />
      </button>
    </div>
  </router-link>
</template>

<script>
import {sumFormatter} from "@/utils/helper";
import {mapMutations} from "vuex";

export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
  },
  data: () => ({
    product: {
      id: null,
      amount: 0
    }
  }),
  methods: {
    ...mapMutations('basket', ['setProduct', 'setAmount']),

    addToBasket() {
      if (!this.product.amount) this.product.amount++
      this.setProduct(this.product)
    },

    changeAmount(operation) {
      if (operation === 'minus') {
        if (this.product.amount) this.product.amount--
      } else if (operation === 'plus') {
        this.product.amount++
      }

      this.setAmount({
        id: this.product.id,
        amount: this.product.amount
      })
    },

    sumFormatter,
  },
  computed: {
    computedType() {
      return this.product.type == 'popular' ? 'Mashxur' : this.product.type == 'new' ? 'Yangi' : ''
    },
  },
  mounted() {
    this.product = {...this.product, ...this.info}
    if (!Object.keys(this.product).includes('amount')) {
      this.product.amount = 0
    }
  }
}
</script>

<style>

</style>