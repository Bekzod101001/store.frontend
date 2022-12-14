<template>
  <div class="header-bottom-menu">
    <ul>
      <li>
        <a-button @click="onClickFull" :class="{active: isActiveFull}">
          <i>
            <span></span>
            <span></span>
            <span></span>
          </i>
          Barcha bo‘limlar
        </a-button>
      </li>
      <Recursive v-for="item in list" :menu="item" :key="item.id"></Recursive>
      <li>
        <router-link to="/partners">Hamkorlar</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    isActiveFull: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  components: {
    Recursive: () => import('@/components/layouts/header/menu/recursive.vue')
  },
  methods: {
    onClickFull() {
      this.$emit('onClickFull', (this.isActiveFull ? false : true));
    },

  }

};
</script>

<style lang="scss" scoped>

</style>
