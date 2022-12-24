<template>
  <div class="pages sign sign-in">
    <div class="container">
      <h2 class="sign__title">
        Login
      </h2>

      <form class="form sign__form">
        <div class="form__row">
          <app-input-email v-model="credentials.identifier" />
        </div>
        <div class="form__row">
          <app-input-password v-model="credentials.password" />
        </div>
        <!--        <div class="form__row">
          <a-checkbox
              v-model="isRememberMeActive"
          >
            Remember me
          </a-checkbox>
          <button class="btn sign__form__forgot-btn">Forgot password?</button>
        </div>-->

        <a-button block class="btn--bg btn--orange sign__form__submit-btn" :loading="isLoading" @click="signIn()">
          {{$t('signIn.button.login')}}
        </a-button>

        <p class="sign__form__text">{{ $t('signIn.text') }}?</p>

        <a-button block class="btn--outlined" @click="$router.push({ name: 'Sign Up' })">
          {{$t('signIn.button.create')}}
        </a-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppInputEmail from "@/components/ui/appInputEmail/appInputEmail.vue";
import AppInputPassword from "@/components/ui/appInputPassword/appInputPassword.vue";
import {mapGetters} from "vuex";

export default {
  name: "signIn",
  components: { AppInputPassword, AppInputEmail },
  data: () => ({
    credentials: {
      identifier: '',
      password: ''
    },
    isLoading: false,
    isRememberMeActive: false
  }),
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    signIn() {
      this.isLoading = true;
      this.$store.dispatch('auth/signIn', this.credentials)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          if (error.response.data.error.message === 'Invalid identifier or password') {
            this.$message.error(this.$t('error.credentials'))
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  beforeMount() {
    if(this.isLoggedIn) this.$router.push({name: 'home'})
  }
}
</script>