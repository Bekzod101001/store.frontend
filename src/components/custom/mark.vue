<template>
  <div class="mark">
    <ul>
      <li
          v-for="item in value"
          :key="item"
          @click="changeValue(item)"
      >
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="#DA9909"
            xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_297_3296)">
            <path
                d="M9.99986 15.2917L4.85653 17.9958L5.83903 12.2683L1.67236 8.2125L7.42236 7.37917L9.99403 2.16833L12.5657 7.37917L18.3157 8.2125L14.149 12.2683L15.1315 17.9958L9.99986 15.2917Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </g>
        </svg>
      </li>
      <li
          v-for="item in (5 - value)"
          :key="item + value"
          @click="changeValue(item + value)"
      >
        <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="#D3D3D3"
            xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_297_3296)">
            <path
                d="M9.99986 15.2917L4.85653 17.9958L5.83903 12.2683L1.67236 8.2125L7.42236 7.37917L9.99403 2.16833L12.5657 7.37917L18.3157 8.2125L14.149 12.2683L15.1315 17.9958L9.99986 15.2917Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </g>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>