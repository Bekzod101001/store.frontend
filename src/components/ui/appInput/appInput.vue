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
        v-v-maska
        :data-maska="maska"
        class="app-input__input"
        :inputmode="inputmode"
    >
  </div>
</template>

<script>
import {vMaska} from "maska";

export default {
  name: "appInput",
  directives: {vMaska},
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validate: (str) => {
        return ['text', 'email', 'number', 'search'].includes(str)
      }
    },
    maska: String,
    required: {
      type: Boolean,
      default: false
    },
    inputmode: String
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