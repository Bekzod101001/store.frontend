<template>
  <main class="pages products">
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
                {{ $t('navigation.delivery') }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="delivery-wrapper content">
          <h2>{{ $t('navigation.delivery') }}</h2>
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
import {mapMutations} from "vuex";

export default {
  components: {VueMarkdown},
  data: () => ({
    delivery: ''
  }),
  methods: {
    ...mapMutations('preloader', ['setPreloader']),

    async getDelivery() {
      const {data} = await api.delivery.get()
      this.delivery = data.data.attributes.text
    }
  },
  mounted() {
    this.setPreloader(true)
    this.getDelivery().finally(() => {
      this.setPreloader(false)
    })
  }
}
</script>

<style>

</style>