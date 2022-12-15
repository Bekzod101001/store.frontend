<template>
  <div class="card shopping">
    <div class="card-image">
      <img
          :src="product.image"
          :alt="product.title"
      >
    </div>
    <div class="card-info">
      <h3>{{ product.title }}</h3>
      <a-button>O'chirish</a-button>
    </div>
    <div class="card-price">
      <span>{{ product.price }}</span>
      <small v-if="product.oldPrice">
        {{ product.oldPrice }}
        <b v-if="product.discount">{{ product.discount }}</b>
      </small>
    </div>
    <div class="card-action">
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

export default {
  mixins: [productCardMixin],
}
</script>

<style>

</style>