<template>
  <footer
      class="footer"
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-delay="500"
  >
    <div class="container">
      <div class="footer-wrapper">
        <a-row
            type="flex"
            :gutter="[{ lg: 8, sm: 16, xs: 16 }, { lg: 8, sm: 16, xs: 16 }]"
            justify="center"
        >
          <a-col
              :lg="6"
              :md="8"
              :sm="24"
              :xs="24"
          >
            <div class="footer-logo">
              <img
                  :src="about.logo"
                  alt="logo"
              >
              <span>
                <i class="icon-branch"></i>
                {{ about.slogan }}
              </span>
            </div>
          </a-col>
          <a-col
              :lg="6"
              :md="8"
              :sm="12"
              :xs="24"
          >
            <div class="footer-menu">
              <ul>
                <li>
                  <router-link to="/about">{{ $t('navigation.about') }}</router-link>
                </li>

                <li>
                  <router-link to="/delivery">{{ $t('navigation.delivery') }}</router-link>
                </li>

                <li>
                  <router-link to="/offerta">{{ $t('navigation.offer') }}</router-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col
              :lg="6"
              :md="8"
              :sm="12"
              :xs="24"
          >
            <div class="footer-menu">
              <ul>
                <li>
                  <router-link to="/partners">{{ $t('navigation.partnerShop') }}</router-link>
                </li>

                <li>
                  <router-link to="/contact">{{ $t('navigation.connect') }}</router-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col
              :lg="6"
              :md="24"
              :sm="24"
              :xs="18"
          >
            <div class="footer-contact">
              <ul>
                <li>
                  <a :href="`tel:${clearFormatNumber(contacts.phone)}`">
                    <i class="icon-phone"> </i>
                    <span>
                      {{ contacts.phone }}
                    </span>
                  </a>
                </li>

                <li>
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
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
        <div class="footer-bottom">
          <span>
            © {{ currentYear }} {{ $t('home.rights') }}.
          </span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import {mapGetters} from "vuex";
import {clearFormatNumber} from "@/utils/helper";

export default {
  data: () => ({
    currentYear: new Date().getFullYear()
  }),
  computed: {
    ...mapGetters('contacts', ['contacts']),
    ...mapGetters('socialProfiles', ['socialProfiles']),
    ...mapGetters('about', ['about']),
  },
  methods: {
    clearFormatNumber
  }
};
</script>

<style>

</style>
