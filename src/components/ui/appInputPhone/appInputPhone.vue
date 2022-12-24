<template>
  <app-input
      v-model="formattedValue"
      maska="+998 ## ### ## ##"
      inputmode="numeric"
      required
  >
    <template #label>
      {{ $t('home.phone') }}
    </template>
  </app-input>
</template>

<script>
import AppInput from "@/components/ui/appInput/appInput.vue";

export default {
  name: "appInputPhone",
  components: {AppInput},
  props: {
    value: String
  },
  data: () => ({
    formattedValue: ''
  }),
  mounted() {
    this.formattedValue = this.value
  },
  watch: {
    formattedValue(val) {
      let formattedValueAsNumber = val.replace(/ /g, '').replace('+', '');
      this.$emit('input', formattedValueAsNumber)
    }
  }
}
</script>

<style scoped>

</style>