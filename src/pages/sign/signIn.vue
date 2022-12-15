<template>
  <div class="pages sign sign-in">
    <div class="container">
      <h2 class="sign__title">
        Login
      </h2>

      <form class="form sign__form">
        <div class="form__row">
          <app-input-email
              v-model="credentials.email"
          />
        </div>
        <div class="form__row">
          <app-input-password
              v-model="credentials.password"
          />
        </div>
        <div class="form__row">
          <a-checkbox
              v-model="isRememberMeActive"
          >
            Remember me
          </a-checkbox>
          <button class="btn sign__form__forgot-btn">Forgot password?</button>
        </div>

        <a-button
            block
            class="btn--bg btn--green sign__form__submit-btn"
        >
          Sign in
        </a-button>

        <p class="sign__form__text">Don't Have an Account?</p>

        <a-button
            block
            class="btn--outlined btn--green sign__form__submit-btn"
            @click="$router.push({name: 'Sign Up'})"
        >
          Create account
        </a-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppInputEmail from "@/components/ui/appInputEmail/appInputEmail.vue";
import AppInputPassword from "@/components/ui/appInputPassword/appInputPassword.vue";

export default {
  name: "signIn",
  components: {AppInputPassword, AppInputEmail},
  data: () => ({
    credentials: {
      email: '',
      password: ''
    },

    isRememberMeActive: false
  }),
  methods: {

  }
}
</script>