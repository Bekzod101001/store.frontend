<template>
  <div class="pagination">
    <template v-if="count">
      <button
          :disabled="!currentPage || (currentPage == 1)"
          @click="prev"
          class="pagination-item"
      >
        <i class="icon-angle-pagination-right"/>
      </button>
      <template v-for="item in allPages">
        <button
            v-if="item == 1 || item == allPages || (+currentPage - 1 <= item && +currentPage + 1 >= item)"
            :key="item"
            :disabled="currentPage == item"
            :class="['pagination-item', {active: currentPage == item} ]"
            @click="clickBtn(item)"
        >
          {{item }}
        </button>
        <button
            v-else-if="(currentPage + 1 < item && currentPage + 2 >= item) || (currentPage - 1 > item && currentPage - 2 <= item)"
            class="pagination-item"
            disabled
            :key="item + '1'"
        >
          ...
        </button>
      </template>
      <button
          :disabled="!currentPage || currentPage >= allPages"
          class="pagination-item"
          @click="next"
      >
        <i class="icon-angle-pagination-left" />
      </button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: [String, Number],
      default() {
        return 5
      }
    },
    limit: {
      type: [String, Number],
      default() {
        return 1
      }
    },
    page: {
      type: [String, Number],
      default() {
        return 1
      }
    },
    countLimit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentPage: 1,
      limits: ['10', '15', '20'],
      currentLimit: '10',
    }
  },
  computed: {
    allPages() {
      return Math.ceil(this.count / this.limit)
    }
  },
  mounted() {
    this.currentPage = this.page
    this.currentLimit = this.limit + ''
  },
  methods: {
    next() {
      this.currentPage++
      (this.currentPage <= this.allPages) && this.$emit('paginate', this.currentPage)
    },
    prev() {
      this.currentPage--
      (this.currentPage <= this.allPages) && this.$emit('paginate', this.currentPage)
    },
    clickBtn(arg) {
      if (arg <= this.allPages) {
        this.currentPage = arg
        this.$emit('paginate', arg)
      }
    }
  }
}
</script>

<style scoped>

</style>
  