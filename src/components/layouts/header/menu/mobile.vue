<template>
  <div class="menu-mobile">
    <div class="menu-mobile-wrapper">
      <div class="menu-mobile-register">
        <template v-if="!isLoggedIn">
          <h4>{{ $t('signUp.auth') }}</h4>
          <a-space>
            <a-button
                class="menu-mobile-register__btn menu-mobile-register__btn--sign-in"
                @click="changeRoute('Sign Up')"
            >
              {{ $t('signUp.title') }}
            </a-button>
            <a-button
                class="menu-mobile-register__btn"
                @click="changeRoute('Sign In')"
            >
              {{ $t('button.enter') }}
            </a-button>
          </a-space>
        </template>
        <template v-else>
          <a-button
              class="menu-mobile-register__btn menu-mobile-register__btn--sign-in"
              @click="changeRoute('Account')"
          >
            <i class="icon-user"/>
            {{ authUser?.firstName }}
          </a-button>
        </template>
      </div>
      <perfect-scrollbar class="menu-mobile-menu">
        <ul>
          <li
              v-for="item1 in list"
              :key="'1-' + item1.id"
          >
            <a-collapse
                v-model="activeKeys1"
                expandIconPosition="right"
                v-if="item1.categories && item1.categories.length"
            >
              <template #expandIcon>
                <div class="products-filter-arrow">
                  <i class="icon-angle-collapse-down"></i>
                </div>
              </template>
              <a-collapse-panel
                  :header="item1.name"
                  v-if="item1.categories && item1.categories.length"
                  :key="('1-' + item1.id)"
              >
                <ul>
                  <li
                      v-for="item2 in item1.categories"
                      :key="'2-' + item2.id"
                  >
                    <a-collapse
                        v-model="activeKeys2"
                        expandIconPosition="right"
                        v-if="item2.categories && item2.categories.length"
                    >
                      <template #expandIcon>
                        <div class="products-filter-arrow">
                          <i class="icon-angle-collapse-down"></i>
                        </div>
                      </template>
                      <a-collapse-panel
                          :header="item2.title"
                          :key="'2-' + item2.id"
                      >
                        <ul>
                          <li
                              v-for="item3 in item2.categories"
                              :key="'3-' + item3.id"
                          >
                            <router-link
                                :to="{
                                name: 'Category Single',
                                params: {
                                    categoryId: item3.id
                                }
                            }"
                            >{{ item3.name }}
                            </router-link>
                          </li>
                        </ul>
                      </a-collapse-panel>
                    </a-collapse>
                    <router-link
                        :to="{
                          name: 'Category Single',
                          params: {
                            categoryId: item2.id
                          }
                        }"
                        v-else
                    >
                      {{ item2.name }}
                    </router-link>
                  </li>
                </ul>
              </a-collapse-panel>
              <router-link
                  v-else
                  :to="{
                    name: 'Category Single',
                    params: {
                      categoryId: item1.id
                    }
                  }"
              >
                {{ item1.name }}
              </router-link>
            </a-collapse>
            <router-link
                v-else
                :to="{
                  name: 'Category Single',
                  params: {
                    categoryId: item1.id
                  }
                }"
            >
              {{ item1.name }}
            </router-link>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
    <div class="menu-mobile-layer"></div>
    <i
        class="icon-close"
        @click="onClickMobile(false)"
    ></i>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {

  props: {
    onClickMobile: {
      type: Function,
      default() {
        return null
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeKeys1: [],
      activeKeys2: [],
      activeKeys3: [],
    }
  },
  computed: {
    ...mapState("auth", ["authUser"]),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    changeRoute (name) {
      if(this.$route.name === name) return

      this.$router.push({name})
      this.$emit('close')
    }
  },
  watch: {
    '$route'() {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>