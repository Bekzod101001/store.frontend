<template>
  <main class="pages contact">
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
        <a-row
            type="flex"
            :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
        >
          <a-col span="24">
            <div class="contact-info">
              <h2>Bog‘lanish</h2>
              <a-row
                  type="flex"
                  :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
              >
                <a-col
                    :xl="8"
                    :md="7"
                    :sm="12"
                >
                                    <span>
                                        <i class="icon-phone"></i>
                                        Bog‘lanish uchun:
                                    </span>
                  <a :href="`tel:${clearFormatNumber(contacts.phone)}`">
                    {{ contacts.phone }}
                  </a>
                </a-col>
                <a-col
                    :xl="8"
                    :md="10"
                    :sm="12"
                >
                                    <span>
                                        <i class="icon-phone"/>
                                        Hamkorlar uchun bog‘lanish:
                                    </span>
                  <a :href="`tel:${clearFormatNumber(contacts.partners_phone)}`">
                    {{ contacts.partners_phone }}
                  </a>
                </a-col>

                <a-col
                    :xl="8"
                    :md="7"
                    :sm="24"
                >
                                    <span>
                                        <i class="icon-globe"></i>
                                        Ijtimoiy tarmoqlar:
                                    </span>
                  <div class="contact-info-social">
                    <a
                        v-for="(item, index) in socialProfiles"
                        :key="index"
                        :href="item.url"
                    >
                      <img
                          :src="item.icon"
                          alt=""
                      >
                    </a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col
              :md="12"
              :sm="24"
              v-for="(branch, index) in branches"
              :key="index"
          >
            <div class="contact-info">
              <h3>
                {{ branch.name }}
              </h3>
              <span>
                                <i class="icon-pin"></i>
                                Manzil:
                            </span>
              <a
                  href="#/"
                  target="_blank"
              >
                {{ branch.address }}
              </a>
              <iframe
                  :src="branch.map_link"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </a-col>
        </a-row>


      </div>
    </div>
  </main>
</template>

<script>
import api from "@/api";
import {mapGetters, mapMutations} from "vuex";
import {clearFormatNumber} from "@/utils/helper";

export default {
  data: () => ({
    branches: [
      {
        name: '',
        address: '',
        map_link: ''
      }
    ]
  }),
  computed: {
    ...mapGetters('contacts', ['contacts']),
    ...mapGetters('socialProfiles', ['socialProfiles'])
  },
  methods: {
    ...mapMutations('preloader', ['setPreloader']),

    async getBranches() {
      const {data} = await api.branches.get()
      this.branches = data.data.map(item => {
        item = item.attributes
        return item
      })
    },
    clearFormatNumber,
  },
  mounted() {
    this.setPreloader(true)
    this.getBranches().finally(() => this.setPreloader(false))
  }
}
</script>

<style>

</style>