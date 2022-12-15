<template>
  <div class="pages sign sign-in">
    <h2 class="sign__title">
      Register
    </h2>
    <form class="form sign__form">
      <div class="form__row">
        <app-input
            v-model="newUser.firstName"
            required
        >
          <template #label>First Name</template>
        </app-input>
      </div>
      <div class="form__row">
        <app-input
            v-model="newUser.lastName"
            required
        >
          <template #label>Last Name</template>
        </app-input>
      </div>
      <div class="form__row">
        <app-input-email
            v-model="newUser.email"
        />
      </div>
      <div class="form__row">
        <app-input-phone
            v-model="newUser.phone"
            required
        />
      </div>
      <div class="form__row">
        <app-input-password
            v-model="newUser.password"
        />
      </div>
      <div class="form__row">
        <app-input-password
            v-model="newUser.confirmPassword"
        >
          <template #label>
            Confirm Password
          </template>
        </app-input-password>
      </div>
      <div class="form__row">
        <a-checkbox
            v-model="newUser.agree"
        >
          I agree with Privacy Policy
        </a-checkbox>
      </div>

      <a-button
          block
          class="btn--bg btn--green sign__form__submit-btn"
      >
        Create account
      </a-button>

      <p class="sign__form__text">Already Have an Account?</p>

      <a-button
          block
          class="btn--outlined btn--green sign__form__submit-btn"
          @click="$router.push({name: 'Sign In'})"
      >
        Sign in
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
  components: {AppInputPhone, AppInput, AppInputEmail, AppInputPassword},
  data: () => ({
    newUser: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agree: false
    }
  })
}
</script>

<style scoped>

</style>