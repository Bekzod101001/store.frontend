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
                                Biz haqimizda
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div
                    v-if="aboutUs.data.attributes.full_text"
                    class="about-wrapper content"
                >
                    <h2>Biz haqimizda</h2>
                    <vue-markdown>
                      {{aboutUs.data.attributes.full_text}}
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
    aboutUs: {
      data: {
        attributes: {
          full_text: ''
        }
      }
    }
  }),
  methods: {
    async getAbout () {
      const {data} = await api.about.get()
      this.aboutUs = data
    }
  },
  mounted() {
    this.getAbout()
  }
}
</script>

<style>

</style>