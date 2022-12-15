<template>
  <app-input
      v-model="computedModelValue"
      required
  >
    <template #label>
      Email
    </template>
  </app-input>
</template>

<script>
import AppInput from "@/components/ui/appInput/appInput.vue";

export default {
  name: "appInputEmail",
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