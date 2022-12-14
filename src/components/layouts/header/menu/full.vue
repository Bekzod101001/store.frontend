<template>
    <div class="menu-full">
        <div class="container">
            <div class="menu-full-wrapper">
                <div class="menu-full-left">
                    <ul>
                        <li v-for="(item, index) in list" :key="item.id" :class="isActiveMenu(index)"
                            @click="onClickMenu(index)">
                            <i :class="'icon-' + item.icon"></i>
                            {{ item.title }}
                        </li>
                    </ul>
                </div>
                <div class="menu-full-center">
                    <h3>{{ activeMenu.title }}</h3>
                    <ul>
                        <li v-for="(item, index) in activeMenu.child" :key="index">
                            <a-collapse v-model="activeKeys" :accordion="true" expandIconPosition="right"
                                v-if="item.child && item.child.length">
                                <template #expandIcon>
                                    <div class="menu-full-arrow">
                                        <i class="icon-angle-collapse-down"></i>
                                    </div>
                                </template>
                                <a-collapse-panel :key="'inside-' + (index + 1)" :header="item.title"
                                    v-if="item.child && item.child.length">
                                    <ul>
                                        <li v-for="itemInside in item.child" :key="itemInside.id + 'inner-inside'">
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

                </div>
                <div class="menu-full-right">
                    <a-row type="flex" :gutter="[32, 0]">
                        <a-col span="8" v-for="item in productList" :key="item.id">
                            <ProductCard :info="item" />
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        ProductCard: () => import('@/components/cards/vertical')
    },
    data() {
        return {
            activeMenuIndex: 1,
            activeMenu: {},
            activeKeys: ['inside-1']
        }
    },
    computed: {
        ...mapGetters("products", {
            productList: "shortList"
        })

    },
    methods: {
        onClickMenu(index) {
            this.activeMenuIndex = (index + 1);
            this.activeMenu = this.list[index];
        },
        isActiveMenu(index) {
            if (this.activeMenuIndex == (index + 1)) {
                return 'active'
            } else {
                return ''
            }
        },
    },
    mounted() {
        this.onClickMenu((this.activeMenuIndex - 1));
    }
}
</script>

<style>

</style>