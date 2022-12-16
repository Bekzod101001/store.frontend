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
        {{ product.discount_percent }}
      </span>
      <span
          v-if="product.type"
          :class="product.type"
      >
        {{ computedType }}
      </span>
    </div>
    <div class="card-image">
      <img
          :src="product.images[0]"
          :alt="product.name"
      />
    </div>
    <div class="card-info">
      <h3>{{ product.name }}</h3>
      <h4>
        <i class="icon-document"></i> {{ product.small_description }}
      </h4>
      <span>
                {{ product.price }}
                <small v-if="product.oldPrice">{{ product.oldPrice }}</small>
            </span>
      <!-- small chegirma uchun. -->
    </div>
    <div class="card-action">
      <a-button
          block
          v-if="(!product.amount)"
          @click.prevent="addToBasket()"
      >
        Savatga qo‘shish
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
import productCardMixin from "@/mixins/productCardMixin";

export default {
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