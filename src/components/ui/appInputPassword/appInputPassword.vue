<template>
  <app-input
      v-model="computedModelValue"
      type="password"
      required
  >
    <template #label>
      <slot name="label"/>
      <template v-if="!$slots.label">
        Password
      </template>
    </template>
  </app-input>
</template>

<script>
import AppInput from "@/components/ui/appInput/appInput.vue";

export default {
  name: "appInputPassword",
  components: {AppInput},
  props: {
    value: String
  },
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

<style scoped>

</style>