<template>
  <div class="app-checkbox">
    <input
        v-model="computedModelValue"
        class="app-checkbox__input"
        type="checkbox"
        :id="randomID"
    >
    <label
        class="app-checkbox__label"
        :for="randomID"
    >
      <span class="app-checkbox__label__checker" />
      <slot name="label"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "appCheckbox",
  props: {
    value: Boolean
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

<style lang="scss" src="./appCheckbox.scss" />