<template>
    <div class="menu-mobile">
        <div class="menu-mobile-wrapper">
            <div class="menu-mobile-register">
                <h4>{{ $t('signUp.auth') }}</h4>
                <a-space>
                    <a-button class="menu-mobile-register__btn menu-mobile-register__btn--sign-in">{{ $t('signUp.title')
                    }}</a-button>
                    <a-button class="menu-mobile-register__btn">{{ $t('button.enter') }}</a-button>
                </a-space>
            </div>
            <perfect-scrollbar class="menu-mobile-menu">
                <ul>
                    <li v-for="item1 in list" :key="'1-' + item1.id">
                        <a-collapse v-model="activeKeys1" expandIconPosition="right"
                            v-if="item1.child && item1.child.length">
                            <template #expandIcon>
                                <div class="products-filter-arrow">
                                    <i class="icon-angle-collapse-down"></i>
                                </div>
                            </template>
                            <a-collapse-panel :header="item1.title" v-if="item1.child && item1.child.length"
                                :key="('1-' + item1.id)">
                                <ul>
                                    <li v-for="item2 in item1.child" :key="'2-' + item2.id">
                                        <a-collapse v-model="activeKeys2" expandIconPosition="right"
                                            v-if="item2.child && item2.child.length">
                                            <template #expandIcon>
                                                <div class="products-filter-arrow">
                                                    <i class="icon-angle-collapse-down"></i>
                                                </div>
                                            </template>
                                            <a-collapse-panel :header="item2.title" :key="'2-' + item2.id">
                                                <ul>
                                                    <li v-for="item3 in item2.child" :key="'3-' + item3.id">
                                                        <router-link to="/products">{{ item3.title }}</router-link>
                                                    </li>
                                                </ul>
                                            </a-collapse-panel>
                                        </a-collapse>
                                        <router-link to="/products" v-else>
                                            {{ item2.title }}
                                        </router-link>
                                    </li>
                                </ul>
                            </a-collapse-panel>
                            <router-link v-else to="/">{{ item.title }}</router-link>
                        </a-collapse>
                        <router-link v-else to="/">{{ item.title }}</router-link>
                    </li>
                </ul>
            </perfect-scrollbar>
        </div>
        <div class="menu-mobile-layer"></div>
        <i class="icon-close" @click="onClickMobile(false)"></i>
    </div>
</template>

<script>
export default {

    props: {
        onClickMobile: {
            type: Function,
            default() {
                return null
            }
        },
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            activeKeys1: [],
            activeKeys2: [],
            activeKeys3: [],
        }
    },
    watch: {
        activeKeys1(val) {
            console.log(val, 'dsds')
        }
    }
}
</script>

<style>

</style>