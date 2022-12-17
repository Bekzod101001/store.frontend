<template>
  <main class="pages partners">
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
                Hamkorlar
              </router-link>
            </li>
          </ul>
        </div>
        <div class="partners-wrapper">
          <a-row
              type="flex"
              :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
          >
            <a-col
                :md="18"
                :sm="24"
                :xs="24"
            >
              <a-collapse
                  v-model="activeKeys"
                  expandIconPosition="right"
              >
                <template #expandIcon>
                  <div class="ant-collapse-angle-down">
                    <i class="icon-angle-collapse-down"></i>
                  </div>
                </template>
                <template v-if="partners.length">
                  <a-collapse-panel
                      v-for="(partner, index) in partners"
                      :key="index"
                      :header="partner.title"
                  >
                    <ul>
                      <li>
                        <small> <i class="icon-phone"></i>Hamkorlik uchun:</small>
                        <a :href="`tel:${clearFormatNumber(partner.phone)}`">{{ partner.phone }}</a>
                      </li>
                      <li>
                        <small> <i class="icon-clock"></i>Ish vaqti:</small>
                        <span>{{ partner.workdays }}</span>
                      </li>
                      <li>
                        <small> <i class="icon-pin"></i>Manzil::</small>
                        <span>{{ partner.address }}</span>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <small>
                              Mo’ljal:
                            </small>
                            <span>{{ partner.landmark }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <router-link to="/contact">Xaritada ko‘rish <i
                        class="icon-arrow-right"
                    ></i></router-link>
                  </a-collapse-panel>
                </template>
              </a-collapse>
            </a-col>
            <a-col
                :md="6"
                :sm="12"
                :xs="24"
            >
              <div class="partners-sidebar">
                <div class="partners-sidebar-info">
                  <span>Hamkorlik uchun:</span>
                  <a :href="`tel:${clearFormatNumber(contacts.partners_phone)}`">{{ contacts.partners_phone }}</a>
                </div>
                <i class="icon-phone"></i>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import api from "@/api";
import {clearFormatNumber} from "@/utils/helper";
import {mapGetters} from "vuex";

export default {
  data: () => ({
    activeKeys: [],
    partners: []
  }),
  computed: {
    ...mapGetters('contacts', ['contacts'])
  },
  methods: {
    clearFormatNumber,
    async getPartners () {
      const {data} = await api.partners.get()
      this.partners = data.data.map(item => {
        item = item.attributes
        return item
      })
    }
  },
  mounted() {
    this.setPreloader(true)
    this.getPartners().finally(() => this.setPreloader(false))
  }
}
</script>

<style>

</style>