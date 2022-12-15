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
          <div class="header-top-date">
            <b>18:03</b>
            <i></i>
            <span>2022 yil 20 noyabr, Yakshanba</span>
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
                    src="@/assets/images/uz.png"
                    alt="flag"
                >
                <span>O‘zbekcha</span>
                <i class="icon-angle-down"></i>
              </a-button>
              <div
                  class="header-top-lang-options"
                  slot="overlay"
              >
                <ul>
                  <li>
                    <img
                        src="@/assets/images/en.png"
                        alt="flag"
                    >
                    English
                  </li>
                  <li>
                    <img
                        src="@/assets/images/ru.png"
                        alt="flag"
                    >
                    Русский
                  </li>
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
              <a-button class="header-middle-search-filter">Barchasi <i class="icon-angle-down"></i>
              </a-button>
              <div
                  class="dropdown-options"
                  slot="overlay"
              >
                <ul>
                  <li>
                    <router-link to="/products">
                      Fiqhga oid
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Aqoid kitoblari
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Siyrat
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Sahobalar va tobeinlar
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Hadis kitoblari
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Duolar kitobi
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Ruhiy tarbiya
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Darsliklar
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      Barchasi
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
              :list="list"
              @onClickFull="onClickFull"
              :isActiveFull="isActiveFull"
          ></Menu>
        </div>
      </div>
    </div>
    <FullMenu
        :class="{ active: isActiveFull }"
        :list="list"
    ></FullMenu>
    <MobileMenu
        :class="{ active: isActiveMobile }"
        :list="list"
        :onClickMobile="onClickMobile"
    ></MobileMenu>
    <!-- <div class="menu-full-layer" :class="{ active: isActiveFull }"></div> -->
  </header>
</template>

<script>
import {mapGetters} from "vuex"
import {sumFormatter} from "@/utils/helper";

export default {
  components: {
    Menu: () => import('@/components/layouts/header/menu'),
    FullMenu: () => import('@/components/layouts/header/menu/full.vue'),
    MobileMenu: () => import('@/components/layouts/header/menu/mobile.vue')
  },
  data: () => ({
    isActiveFull: false,
    isActiveMobile: false,
  }),
  computed: {
    ...mapGetters("menu", ["list"]),
    ...mapGetters("basket", ["totalSum", "totalProductsAmount"])
  },
  methods: {
    onClickFull(val) {
      this.isActiveFull = val;
    },
    onClickMobile(val) {
      this.isActiveMobile = val;
      console.log(val)
    },

    sumFormatter,
  },
};
</script>

<style>

</style>
