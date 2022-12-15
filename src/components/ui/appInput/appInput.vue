<template>
  <div class="app-input">
    <label
        :for="randomID"
        class="app-input__label"
    >
      <slot name="label" />
      <sup
          v-if="required"
          class="app-input__label__required-mark"
      >
        *
      </sup>
    </label>
    <input
        v-model="computedModelValue"
        :id="randomID"
        :type="type"
        :required="required"
        class="app-input__input"
    >
  </div>
</template>

<script>
export default {
  name: "appInput",
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validate: (str) => {
        return ['text', 'email', 'number', 'search'].includes(str)
      }
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    randomID: Math.floor(Math.random() * 99999)
  }),
  computed: {
    computedModelValue: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style lang="scss" src="./appInput.scss" />