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
              Amal bilan ko‘rsating
            </span>
          </div>
          <div class="header-top-phone">
            <router-link to="/contact">
              <i class="icon-phone"></i>
              Aloqa
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
                  <template
                      v-for="(lang, key) in langs"
                  >
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
                  src="@/assets/images/logo.svg"
                  alt="logo"
              >
            </router-link>
          </div>
          <div class="header-middle-search">
            <a-dropdown placement="bottomLeft">
              <a-button class="header-middle-search-filter">
                Barchasi <i class="icon-angle-down"/>
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
                  placeholder="Mahsulotlar bo‘ylab izlash"
              >
            </div>
            <a-button class="header-middle-search-submit">Izlash</a-button>
          </div>
          <router-link
              class="header-middle-shop"
              :to="{name: 'shopping'}"
          >
            <div class="header-middle-shop-count">
              <i class="icon-shop"></i>
              <span>{{ totalProductsAmount }}</span>
            </div>
            <div class="header-middle-shop-info">
              <span>Savatcha</span>
              <small>{{ sumFormatter(totalSum) }} so‘m</small>
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
              <span>Kirish</span>
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
import {mapGetters, mapState} from 'vuex'
import {sumFormatter} from "@/utils/helper";
import api from "@/api";
import i18n from "@/i18n";

export default {
  components: {
    Menu: () => import('@/components/layouts/header/menu'),
    MobileMenu: () => import('@/components/layouts/header/menu/mobile.vue')
  },
  data: () => ({
    isActiveFull: false,
    isActiveMobile: false,
    categories: [],
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
    activeLang: localStorage.getItem('lang')
  }),
  computed: {
    ...mapState("auth", ["authUser"]),
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters("menu", ["list"]),
    ...mapGetters("basket", ["totalSum", "totalProductsAmount"]),

    computedCategoriesWithSub() {
      return this.categories.filter(category => category.categories.length)
    },

    computedCategoriesWithoutSub() {
      return this.categories.filter(category => !category.categories.length)
    }
  },
  methods: {
    onClickFull(val) {
      this.isActiveFull = val;
    },

    onClickMobile(val) {
      this.isActiveMobile = val;
    },

    async getCategories() {
      const {data} = await api.categories.get({
        populate: ['categories', 'category'],
        filters: {
          category: {
            id: {
              "$null": true
            }
          }
        }
      })
      this.categories = data.data.map(item => {
        item = item.attributes
        if (item.categories) {
          item.categories = item.categories.data.map(category => {
            category = category.attributes
            return category
          })
        }
        return item
      })
    },

    changeLang (key) {
      this.activeLang = key
      i18n.locale = key
      localStorage.setItem('lang', key)
    },

    sumFormatter,
  },
  mounted() {
    this.getCategories()
  }
};
</script>

<style>

</style>