<template>
  <section class="about" data-aos="fade-down" data-aos-duration="300" data-aos-delay="500">
    <div class="container">
      <div class="about-wrapper">
        <h2>{{ $t('home.about') }}</h2>
        <vue-markdown v-if="about.full_text" class="about__full-text">
          {{ about.full_text }}
        </vue-markdown>
        <a-button @click="$router.push('/about')">{{ $t('home.more') }}</a-button>
        <img src="@/assets/images/about.svg" alt="about">
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import VueMarkdown from "vue-markdown/src/VueMarkdown";

export default {
  components: { VueMarkdown },
  computed: {
    ...mapGetters('about', ['about'])
  }
}
</script>

<style>

</style>