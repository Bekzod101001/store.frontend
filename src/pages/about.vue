<template>
    <main class="pages products">
        <div class="container">
            <div class="pages-wrapper">
                <div class="pages-breadcrumbs">
                    <ul>
                        <li>
                            <i class="icon-home"></i>
                            <router-link to="/">
                                {{ $t('navigation.main') }}
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                {{ $t('navigation.about') }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="about.full_text" class="about-wrapper content">
                    <h2>{{ $t('navigation.about') }}</h2>
                    <vue-markdown>
                        {{ about.full_text }}
                    </vue-markdown>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import VueMarkdown from "vue-markdown/src/VueMarkdown";
import { mapGetters } from "vuex";

export default {
    components: { VueMarkdown },
    computed: {
        ...mapGetters('about', ['about'])
    }
}
</script>

<style>

</style>