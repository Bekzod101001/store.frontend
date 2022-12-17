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
                                Oferta
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="offerta-wrapper content">
                    <h2>Oferta</h2>
                    <vue-markdown v-if="termsAndOffer">
                      {{termsAndOffer}}
                    </vue-markdown>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import VueMarkdown from "vue-markdown/src/VueMarkdown";
import api from "@/api";

export default {
  components: {VueMarkdown},
  data: () => ({
    termsAndOffer: ''
  }),
  methods: {
    async getTermsAndOffer() {
      const {data} = await api.offers.get()
      this.termsAndOffer = data.data.attributes.full_text
    }
  },
  mounted() {
    this.setPreloader(true)
    this.getTermsAndOffer().finally(() => this.setPreloader(false))
  }
}
</script>

<style>

</style>