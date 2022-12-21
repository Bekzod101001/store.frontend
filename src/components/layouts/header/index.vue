<template>
  <header
      class="header"
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-delay="500"
  >
    <div class="header-top">
      <div class="container">
        <div class="header-top-wrapper">
          <div class="header-top-left">
            <span>
              <i class="icon-branch"></i>
              {{ about.slogan }}
            </span>
          </div>
          <div class="header-top-phone">
            <router-link to="/contact">
              <i class="icon-phone"></i>
              {{ $t('home.contact') }}
            </router-link>
          </div>
          <div class="header-top-lang">
            <a-dropdown placement="bottomRight">
              <a-button>
                <img
                    :src="langs[activeLang].img"
                    alt="flag"
                >
                <span>
                  {{ langs[activeLang].label }}
                </span>
                <i class="icon-angle-down"></i>
              </a-button>
              <div
                  class="header-top-lang-options"
                  slot="overlay"
              >
                <ul>
                  <template v-for="(lang, key) in langs">
                    <li
                        v-if="activeLang !== key"
                        :key="key"
                        @click="changeLang(key)"
                    >
                      <img
                          :src="lang.img"
                          alt="flag"
                      >
                      {{ lang.label }}
                    </li>
                  </template>
                </ul>
              </div>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <div class="container">
        <div class="header-middle-wrapper">
          <div class="header-middle-bars">
            <a-button
                @click="onClickMobile(true)"
                :class="{ active: isActiveMobile }"
            >
              <i>
                <span></span>
                <span></span>
                <span></span>
              </i>
            </a-button>
          </div>
          <div class="header-middle-logo">
            <router-link to="/">
              <img
                  :src="about.logo"
                  alt="logo"
              >
            </router-link>
          </div>
          <div class="header-middle-search">
            <a-dropdown placement="bottomLeft">
              <a-button class="header-middle-search-filter">
                {{ $t('products.button.amount') }} <i class="icon-angle-down"/>
              </a-button>
              <div
                  class="dropdown-options"
                  slot="overlay"
              >
                <ul>
                  <li
                      v-for="(category, index) in computedCategoriesWithoutSub"
                      :key="index"
                  >
                    <router-link to="/products">
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </a-dropdown>
            <div class="header-middle-search-input">
              <i class="icon-search"></i>
              <input
                  type="text"
                  v-model="searchingProduct"
                  placeholder="Mahsulotlar bo‘ylab izlash"
                  @keydown.enter="searchProduct"
              >
            </div>
            <a-button
                class="header-middle-search-submit"
                @click="searchProduct"
            >
              {{ $t('button.search') }}
            </a-button>
          </div>
          <router-link
              class="header-middle-shop"
              :to="{ name: 'shopping' }"
          >
            <div class="header-middle-shop-count">
              <i class="icon-shop"></i>
              <span>{{ totalProductsAmount }}</span>
            </div>
            <div class="header-middle-shop-info">
              <span>{{ $t('navigation.basket') }}</span>
              <small>{{ sumFormatter(totalSum) }} {{ $t('sum') }}</small>
            </div>
          </router-link>
          <div class="header-middle-login">
            <a-button
                v-if="isLoggedIn"
                @click="$router.push({
              name: 'Account'
            })"
            >
              <i class="icon-user"></i>
              <span>{{ authUser.firstName }} </span>
            </a-button>

            <a-button
                v-else
                @click="$router.push({
              name: 'Sign In'
            })"
            >
              <i class="icon-user"></i>
              <span>{{ $t('button.enter') }}</span>
            </a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-wrapper">
          <Menu
              v-if="categories"
              :list="computedCategoriesWithSub"
              @onClickFull="onClickFull"
              :isActiveFull="isActiveFull"
          />
        </div>
      </div>
    </div>
    <MobileMenu
        :class="{ active: isActiveMobile }"
        :list="list"
        :onClickMobile="onClickMobile"
    />
    <!-- <div class="menu-full-layer" :class="{ active: isActiveFull }"></div> -->
  </header>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
import {sumFormatter} from "@/utils/helper";
import i18n from "@/i18n";

export default {
  components: {
    Menu: () => import('@/components/layouts/header/menu'),
    MobileMenu: () => import('@/components/layouts/header/menu/mobile.vue')
  },
  props: {
    categories: Array
  },
  data: () => ({
    isActiveFull: false,
    isActiveMobile: false,
    langs: {
      uz: {
        label: 'O‘zbekcha',
        img: require('@/assets/images/uz.png')
      },
      ru: {
        label: 'Русский',
        img: require('@/assets/images/ru.png')
      },
      en: {
        label: 'English',
        img: require('@/assets/images/en.png')
      }
    },
    activeLang: localStorage.getItem('lang'),
    searchingProduct: ''
  }),
  computed: {
    ...mapState("auth", ["authUser"]),
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters("menu", ["list"]),
    ...mapGetters("basket", ["totalSum", "totalProductsAmount"]),
    ...mapGetters('about', ['about']),

    computedCategoriesWithSub() {
      return this.categories.filter(category => {
        return category.categories.length
      })
    },

    computedCategoriesWithoutSub() {
      return this.categories.filter(category => !category.categories.length)
    }
  },
  methods: {
    ...mapMutations('preloader', ['setPreloader']),

    onClickFull(val) {
      this.isActiveFull = val;
    },

    onClickMobile(val) {
      this.isActiveMobile = val;
    },

    changeLang(key) {
      this.setPreloader(true)
      this.activeLang = key
      i18n.locale = key
      localStorage.setItem('lang', key)
      location.reload()
    },

    searchProduct () {
      this.$router.push({
        name: 'products',
        query: {
          search: this.searchingProduct
        }
      })
    },

    sumFormatter,
  }
};
</script>

<style>

</style>