<template>
    <main class="pages shopping">
        <div class="container">
            <div class="pages-wrapper">
                <div class="pages-breadcrumbs">
                    <ul>
                        <li>
                            <i class="icon-home"></i>
                            <router-link to="/">
                                Bosh sahifa
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                Savatcha
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="pages-title">
                    <h2>
                        Savatcha
                        <span>(21)</span>
                    </h2>
                </div>
                <div class="shopping-outside">
                    <a-row type="flex" :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]">
                        <a-col :lg="18" :md="24" :sm="24" :xs="24">
                            <div class="shopping-wrapper">
                                <div class="shopping-header">
                                    <a-checkbox id="all">
                                        Barchasini tanlash
                                    </a-checkbox>
                                </div>
                                <div class="shopping-body">
                                    <Card :info="item" v-for="item in shoppingList" :key="item.id" />
                                </div>
                            </div>
                        </a-col>
                        <a-col :lg="6" :md="12" :sm="12" :xs="24">
                            <div class="shopping-sidebar">
                                <a-button>Buyurtma</a-button>
                                <ul>
                                    <li>
                                        <b>Jami miqdor:</b>
                                        <b>5 277 000 UZS</b>
                                    </li>
                                    <li>
                                        <span>Chegirma:</span>
                                        <small>-250 000 UZS</small>
                                    </li>
                                    <li>
                                        <span>Mahsulotlar soni:</span>
                                        <span>4 ta</span>
                                    </li>
                                </ul>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: {
        Card: () => import("@/components/cards/shopping")
    },
    data() {
        return {

        }

    },
    methods: {
    },
    computed: {
        ...mapGetters("products", ["shoppingList"])
    },
    watch: {

    }
}
</script>

<style>

</style>