<template>
  <div class="card shopping">
    <div class="card-image">
      <img
          :src="product.images[0]"
          :alt="product.name"
      >
    </div>
    <div class="card-info">
      <router-link :to="{
          name: 'productsId',
          params: {
            id: product.id
          }
        }"
      >
        <h3>{{ product.name }}</h3>
      </router-link>
      <a-button
          @click.prevent="deleteProductFromBasket"
      >
        O'chirish
      </a-button>
    </div>
    <div class="card-price">
      <span>{{ sumFormatter(product.price) }} {{ $t('sum') }}</span>
      <small v-if="product.oldPrice">
        <s>{{ sumFormatter(product.oldPrice) }} {{ $t('sum') }}</s>
        <b v-if="product.discount_percent">{{ product.discount_percent }}%</b>
      </small>
    </div>
    <div
        class="card-action"
        @click.prevent
    >
      <a-button @click="changeAmount('minus')">
        <i class="icon-minus"/>
      </a-button>

      <span>{{ product.amount }}</span>

      <a-button @click="changeAmount('plus')">
        <i class="icon-plus"/>
      </a-button>
    </div>
  </div>
</template>

<script>
import productCardMixin from "@/mixins/productCardMixin";
import {mapMutations} from "vuex";
import {sumFormatter} from "@/utils/helper";

export default {
  mixins: [productCardMixin],
  methods: {
    ...mapMutations('basket', ['setAmount']),

    sumFormatter,

    deleteProductFromBasket() {
      this.setAmount({id: this.product.id, amount: 0})
    }
  }
}
</script>

<style>

</style>