<template>
  <div class="pages sign sign-in">
    <div class="container">
      <h2 class="sign__title">
        {{ $t('title.account') }}
      </h2>
      <a-row>
        <a-col :lg="6">
          <a-menu mode="vertical">
            <a-menu-item
              @click="$router.push({
              name: 'AccountOrders'
            })"
            >
              <a-icon type="orders" />
              {{ $t('title.orders') }}
            </a-menu-item>
            <a-menu-item
              @click="logout()"
            >
              <a-icon type="logout" />
              {{ $t('title.logout') }}
            </a-menu-item>
          </a-menu>

        </a-col>
        <a-col :lg="18">
          <router-view/>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "signIn",
  data: () => ({
    selectedKeys: [],
    openKeys: [],
    isRememberMeActive: false
  }),
  methods: {
    signIn() {
      this.$store.dispatch('auth/signIn', this.credentials)
    },
    logout() {
      localStorage.removeItem('accessToken');
      this.$store.commit('auth/setUser', null);
      this.$router.push({ name: 'home' });
    }
  }
}
</script>