<template>
  <router-link :to="{
    name: 'productsId',
    params: {
      id: product.id
    }
  }" class="card vertical">
    <div class="card-tags">
      <span v-if="product.discount_percent" :class="{ discount: product.discount_percent }">
        {{ product.discount_percent }} %
      </span>
      <span v-if="product.type" :class="product.type">
        {{ computedType }}
      </span>
    </div>
    <div class="card-image">
      <img :src="product.images[0]" :alt="product.name" />
    </div>
    <div class="card-info">
      <h3>{{ product.name }}</h3>
      <h4 v-if="product.category">
        <i class="icon-document"></i>
        {{ product.category.data.attributes.name }}
      </h4>
      <span>
        {{ sumFormatter(product.price) }} {{ $t('sum') }}
        <small v-if="product.oldPrice">{{ product.oldPrice }} {{ $t('sum') }}</small>
      </span>
      <!-- small chegirma uchun. -->
    </div>
    <div class="card-action">
      <a-button block v-if="(!product.amount)" @click.prevent="addToBasket()">
        {{ $t('card.addBasket') }}
      </a-button>
      <button class="card-action-universal" @click.prevent v-else>
        <i class="icon-minus" @click.prevent="changeAmount('minus')" />

        <span> {{ product.amount }}</span>

        <i class="icon-plus" @click.prevent="changeAmount('plus')" />
      </button>
    </div>
  </router-link>
</template>

<script>
import productCardMixin from "@/mixins/productCardMixin";
import { sumFormatter } from "@/utils/helper";

export default {
  methods: {
    sumFormatter,
  },
  mixins: [productCardMixin],
  computed: {
    computedType() {
      return this.product.type == 'popular' ? 'Mashxur' : this.product.type == 'new' ? 'Yangi' : ''
    },
  }
}
</script>

<style>

</style>