<template>
  <main class="pages products">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-breadcrumbs">
          <ul>
            <li>
              <i class="icon-home"></i>
              <router-link to="/">
                Bosh sahifa
              </router-link>
            </li>
            <li>
              <i class="icon-angle-right"></i>
              <router-link to="/">
                Yetkazib berish
              </router-link>
            </li>
          </ul>
        </div>
        <div class="delivery-wrapper content">
          <h2>Yetkazib berish</h2>
          <vue-markdown v-if="delivery">
            {{delivery}}
          </vue-markdown>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import api from "@/api";
import VueMarkdown from "vue-markdown/src/VueMarkdown";

export default {
  components: {VueMarkdown},
  data: () => ({
    delivery: ''
  }),
  methods: {
    async getDelivery() {
      const {data} = await api.delivery.get()
      this.delivery = data.data.attributes.text
    }
  },
  mounted() {
    this.getDelivery()
  }
}
</script>

<style>

</style>