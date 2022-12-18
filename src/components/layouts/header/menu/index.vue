<template>
  <div class="header-bottom-menu">
    <ul>
      <Recursive v-for="item in list" :menu="item" :key="item.id" />
      <li>
        <router-link to="/partners">{{ $t('navigation.partners') }}</router-link>
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

<style
    lang="scss"
    scoped
>

</style>