<template>
  <div class="pages sign sign-in">
    <h2 class="sign__title">
      {{ $t('signUp.title') }}
    </h2>
    <form class="form sign__form">
      <div class="form__row">
        <app-input v-model="newUser.firstName" required>
          <template #label>{{ $t('signUp.form.name') }}</template>
        </app-input>
      </div>
      <div class="form__row">
        <app-input v-model="newUser.lastName" required>
          <template #label>{{ $t('signUp.form.lastName') }}</template>
        </app-input>
      </div>
      <div class="form__row">
        <app-input-email v-model="newUser.email" />
      </div>

      <div class="form__row">
        <app-input-phone v-model="newUser.phone" required />
      </div>
      <div class="form__row">
        <app-input-password v-model="newUser.password" />
      </div>
      <div class="form__row">
        <a-checkbox v-model="agree">
          {{ $t('signUp.form.text') }}
        </a-checkbox>
      </div>

      <a-button block class="btn--bg sign__form__submit-btn" :disabled="!agree" :loading="isLoading" @click="signUp()">
        {{$t('signUp.button.create')}}
      </a-button>

      <p class="sign__form__text">{{$t('signUp.text')}}</p>

      <a-button block class="btn--outlined" @click="$router.push({ name: 'Sign In' })">
        {{$t('signUp.button.signIn')}}
      </a-button>
    </form>
  </div>
</template>

<script>
import AppInputPassword from "@/components/ui/appInputPassword/appInputPassword.vue";
import AppInputEmail from "@/components/ui/appInputEmail/appInputEmail.vue";
import AppInput from "@/components/ui/appInput/appInput.vue";
import AppInputPhone from "@/components/ui/appInputPhone/appInputPhone.vue";

export default {
  name: "signIn",
  components: { AppInputPhone, AppInput, AppInputEmail, AppInputPassword },
  data: () => ({
    agree: false,
    newUser: {
      firstName: 'Bekobod',
      lastName: 'Tolipjonov',
      email: 'bekzod101001@gmail.com',
      phone: 'blablabla',
      password: 'blablabla'
    },
    isLoading: false
  }),
  methods: {
    signUp() {
      this.isLoading = true;
      this.newUser.username = this.newUser.email;
      this.$store.dispatch('auth/signUp', this.newUser)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          if (error.response.data.error.message === 'Email or Username are already taken') {
            this.$message.error('Email or Username are already taken')
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>

</style>