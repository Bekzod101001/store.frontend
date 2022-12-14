<template>
    <main class="pages products">
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
                                Kitoblar
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>

                            <router-link to="/">
                                Diniy
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                Fiqhga oid
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="pages-title">
                    <h2>
                        Fiqhga oid
                        <span>(124)</span>
                    </h2>
                </div>
                <div class="products-wrapper">
                    <div class="products-filter">
                        <a-collapse v-model="activeKeys" expandIconPosition="right" :accordion="true">
                            <template #expandIcon>
                                <div class="products-filter-arrow">
                                    <i class="icon-angle-collapse-down"></i>
                                </div>
                            </template>
                            <a-collapse-panel key="1" :header="filter.menu.title">
                                <ul>
                                    <li v-for="(item, index) in filter.menu.child" :key="item.id + 'inside'">
                                        <a-collapse v-model="activeKeysInside" :accordion="true"
                                            expandIconPosition="right" v-if="item.child && item.child.length">
                                            <template #expandIcon>
                                                <div class="products-filter-arrow">
                                                    <i class="icon-angle-collapse-down"></i>
                                                </div>
                                            </template>
                                            <a-collapse-panel :key="'inside-' + (index + 1)" :header="item.title"
                                                v-if="item.child && item.child.length">
                                                <ul>
                                                    <li v-for="itemInside in item.child"
                                                        :key="itemInside.id + 'inner-inside'">
                                                        <router-link to="/">
                                                            {{ itemInside.title }}
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </a-collapse-panel>
                                        </a-collapse>
                                        <router-link v-else to="/">{{ item.title }}</router-link>
                                    </li>
                                </ul>
                            </a-collapse-panel>
                            <a-collapse-panel key="2" header="Narx">
                                <a-row type="flex" :gutter="[16, 16]">
                                    <a-col :sm="12" :xs="24">
                                        <a-input placeholder="0 dan"></a-input>
                                    </a-col>
                                    <a-col :sm="12" :xs="24">
                                        <a-input placeholder="0 gacha"></a-input>
                                    </a-col>
                                </a-row>
                            </a-collapse-panel>
                            <a-collapse-panel key="3" header="Muallif">
                                <div class="products-filter-checkbox">
                                    <a-checkbox>
                                        Imom Gʻazzoliy
                                    </a-checkbox>
                                    <a-checkbox>
                                        Mubashshir Ahmad
                                    </a-checkbox>
                                    <a-checkbox>
                                        Ibrohim Muhammad Ali
                                    </a-checkbox>
                                    <a-checkbox>
                                        Amina Shenlik oʻgʻli
                                    </a-checkbox>
                                    <a-checkbox>
                                        Doktor Oiz Qarniy
                                    </a-checkbox>
                                </div>
                            </a-collapse-panel>
                            <a-collapse-panel key="4" header="Kitob tili">
                                <div class="products-filter-checkbox">
                                    <a-checkbox>
                                        Oʻzbek
                                    </a-checkbox>
                                    <a-checkbox>
                                        Rus
                                    </a-checkbox>
                                    <a-checkbox>
                                        Igliz
                                    </a-checkbox>
                                    <a-checkbox>
                                        arab
                                    </a-checkbox>
                                    <a-checkbox>
                                        Tojik
                                    </a-checkbox>
                                </div>
                            </a-collapse-panel>
                            <a-collapse-panel key="5" header="Muallif">
                                <div class="products-filter-checkbox">
                                    <a-checkbox>
                                        2022
                                    </a-checkbox>
                                    <a-checkbox>
                                        2021
                                    </a-checkbox>
                                    <a-checkbox>
                                        2020
                                    </a-checkbox>
                                    <a-checkbox>
                                        2019
                                    </a-checkbox>
                                    <a-checkbox>
                                        2018
                                    </a-checkbox>
                                </div>
                            </a-collapse-panel>
                            <a-collapse-panel key="6" header="Azon kitoblari">
                                <div class="products-filter-checkbox">
                                    <a-checkbox>
                                        Azon kitoblaris
                                    </a-checkbox>
                                    <a-checkbox>
                                        Imom Buxoriy Xalqaro markazi
                                    </a-checkbox>
                                    <a-checkbox>
                                        Sano-standart
                                    </a-checkbox>
                                    <a-checkbox>
                                        Gʻafur Gʻulom
                                    </a-checkbox>
                                    <a-checkbox>
                                        Sharq
                                    </a-checkbox>
                                </div>
                            </a-collapse-panel>
                            <a-collapse-panel key="7" header="Muqovasi">
                                <div class="products-filter-checkbox">
                                    <a-checkbox>
                                        Yumshoq
                                    </a-checkbox>
                                    <a-checkbox>
                                        Qattiq
                                    </a-checkbox>
                                </div>
                            </a-collapse-panel>
                        </a-collapse>
                    </div>
                    <div class="products-list">
                        <div class="products-list-header">
                            <div class="products-list-header-filter">
                                <a-dropdown placement="bottomCenter">
                                    <a-button>Xolati bo‘yicha <i class="icon-angle-down"></i></a-button>
                                    <div class="dropdown-options" slot="overlay">
                                        <ul>
                                            <li>
                                                <span>Yangi</span>
                                            </li>
                                            <li>
                                                <span>Mashxur</span>
                                            </li>
                                            <li>
                                                <span>Eski</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a-dropdown>
                                <a-dropdown placement="bottomCenter">
                                    <a-button>Narxi bo‘yicha <i class="icon-angle-down"></i></a-button>
                                    <div class="dropdown-options" slot="overlay">
                                        <ul>
                                            <li>
                                                <span>Qimmat</span>
                                            </li>
                                            <li>
                                                <span>O'rtancha</span>
                                            </li>
                                            <li>
                                                <span>Arzon</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a-dropdown>
                                <a-dropdown placement="bottomCenter">
                                    <a-button>Alifbo bo‘yicha <i class="icon-angle-down"></i></a-button>
                                    <div class="dropdown-options" slot="overlay">
                                        <ul>
                                            <li>
                                                <span>O'ngari</span>
                                            </li>
                                            <li>
                                                <span>Teskari</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a-dropdown>
                            </div>
                            <div class="products-list-header-layout">
                                <i class="icon-layout1" @click="onClickLayout('vertical')"
                                    :class="{ active: layout == 'vertical' }"></i>
                                <i class="icon-layout2" @click="onClickLayout('horizontal')"
                                    :class="{ active: layout == 'horizontal' }"></i>
                            </div>
                            <div class="products-list-header-count">
                                <a-dropdown placement="bottomCenter">
                                    <a-button>
                                        <span>20</span>
                                        <i class="icon-angle-down"></i>
                                    </a-button>
                                    <div class="dropdown-options" slot="overlay">
                                        <ul>
                                            <li>
                                                <span>10</span>
                                            </li>
                                            <li>
                                                <span>20</span>
                                            </li>
                                            <li>
                                                <span>30</span>
                                            </li>
                                            <li>
                                                <span>40</span>
                                            </li>
                                            <li>
                                                <span>Barchasi</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a-dropdown>
                            </div>
                        </div>
                        <div class="products-list-body">
                            <a-row type="flex" :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]">
                                <template v-if="layout == 'vertical'">
                                    <a-col v-for="item in list" :key="item.id" :xxl="6" :xl="8" :md="12" :sm="12"
                                        :xs="24">
                                        <ProductCardVertical :info="item" />
                                    </a-col>
                                </template>
                                <template v-else>
                                    <a-col v-for="item in list" :key="item.id" :xxl="12" :xs="24" :sm="24">
                                        <ProductCardHorizontal :info="item" />
                                    </a-col>
                                </template>
                            </a-row>
                        </div>
                    </div>
                </div>
                <div class="pages-pagination">
                    <Pagination />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: {
        ProductCardVertical: () => import('@/components/cards/vertical'),
        ProductCardHorizontal: () => import('@/components/cards/horizontal'),
        Pagination: () => import('@/components/custom/pagination')
    },
    data() {
        return {
            layout: 'vertical',
            activeKeys: [],
            activeKeysInside: [],
            filter: {
                menu: {
                    id: 2,
                    title: "Kitoblar",
                    link: "/",
                    icon: 'menu2',
                    child: [
                        {
                            id: 1,
                            title: "Badiiy kitoblar",
                            link: "/"
                        },
                        {
                            id: 2,
                            title: `Diniy`,
                            link: "/",
                            child: [
                                {
                                    id: 1,
                                    title: "Fiqhga oid",
                                    link: "/"
                                },
                                {
                                    id: 2,
                                    title: `Aqoid kitoblari`,
                                    link: "/"
                                },
                                {
                                    id: 3,
                                    title: `Siyrat`,
                                    link: "/"
                                },
                                {
                                    id: 4,
                                    title: `Sahobalar va tobeinlar`,
                                    link: "/"
                                },
                                {
                                    id: 5,
                                    title: `Hadis kitoblari`,
                                    link: "/"
                                },
                                {
                                    id: 6,
                                    title: `Duolar kitobi`,
                                    link: "/"
                                },
                                {
                                    id: 7,
                                    title: `Ruhiy tarbiya`,
                                    link: "/"
                                },
                                {
                                    id: 8,
                                    title: `Darsliklar`,
                                    link: "/"
                                },

                            ]
                        },
                        {
                            id: 3,
                            title: `Biznes va marketing`,
                            link: "/"
                        },
                        {
                            id: 4,
                            title: `Bolalar uchun`,
                            link: "/"
                        },
                        {
                            id: 5,
                            title: `Biznes va marketing`,
                            link: "/"
                        },
                        {
                            id: 6,
                            title: `Xorijiy tildagi kitoblar`,
                            link: "/"
                        },

                    ]
                },
            }
        }

    },
    methods: {
        onClickLayout(payload) {
            this.layout = payload
        },
    },
    computed: {
        ...mapGetters("products", ["list"])
    },
    watch: {
    }
}
</script>

<style>

</style>