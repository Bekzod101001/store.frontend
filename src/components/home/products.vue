<template>
  <div class="products">
    <div class="container">
      <div class="products-wrapper">
        <perfect-scrollbar class="products-header" data-aos="fade-down" data-aos-duration="300" data-aos-delay="600">
          <a-button :class="onChangeTab(item)" v-for="item in tab.list" :key="item.id" @click="onClickTab(item)">
            {{ item.title }}
          </a-button>
        </perfect-scrollbar>
        <div class="products-body">
          <div class="products-body-col" v-for="(item, index) in products.data" :key="item.id" data-aos="flip-left"
            data-aos-duration="300" :data-aos-delay="index * 100 + 500">
            <ProductCard :info="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  components: {
    ProductCard: () => import('@/components/cards/vertical')
  },
  data() {
    return {
      tab: {
        list: [
          {
            id: 1,
            title: "Tavsiya etilganlar"
          },
          {
            id: 2,
            title: "Yangi mahsulotlar"
          },
          {
            id: 3,
            title: "Eng ko'p qidirilgan"
          },
          {
            id: 4,
            title: "Eng ko'p sotib olingan"
          },
          {
            id: 5,
            title: "Chegirmalar"
          },
        ],
        active: {
          id: 1,
          title: "Tavsiya etilganlar"
        }
      }
    }
  },
  computed: {
    ...mapGetters("products", ["products"])
  },
  methods: {
    ...mapActions('products', ['getProducts']),

    // tab functions
    onClickTab(payload) {
      this.tab.active = payload;
    },
    onChangeTab(payload) {
      if (this.tab.active.id == payload.id) {
        return 'active'
      } else {
        return ''
      }
    }
    // tab functions
  },
  mounted() {
    this.getProducts()
  }
};
</script>

<style>

</style>
